// Genera los PDF de entregables a partir de src/docs/*.md|*.html
// Uso: node build_pdfs.js [nombre ...]   (sin argumentos: todos)
// Cada .md admite front-matter simple entre líneas '---' (clave: valor) para la portada.
const fs = require('fs');
const path = require('path');
const { marked } = require('marked');
const { chromium } = require('playwright');

const SRC = __dirname;
const DOCS = process.env.DOCS_DIR || path.join(SRC, 'docs');
const OUT = process.env.OUT_DIR || path.join(SRC, '..', 'entregables');

marked.setOptions({ gfm: true, breaks: false });

function parseFrontMatter(txt) {
  const m = txt.match(/^---\n([\s\S]*?)\n---\n/);
  if (!m) return { meta: {}, body: txt };
  const meta = {};
  m[1].split('\n').forEach((l) => {
    const i = l.indexOf(':');
    if (i > 0) meta[l.slice(0, i).trim()] = l.slice(i + 1).trim();
  });
  return { meta, body: txt.slice(m[0].length) };
}

function cover(meta) {
  if (!meta.title) return '';
  return `<section class="cover">
    <img class="logo" src="assets/am_logo_white.png">
    ${meta.docnum ? `<div class="docnum">${meta.docnum}</div>` : ''}
    <div class="eyebrow">${meta.eyebrow || ''}</div>
    <h1>${meta.title}</h1>
    ${meta.sub ? `<div class="sub">${meta.sub}</div>` : ''}
    <div class="meta">${meta.meta || ''}</div>
    <div class="band"></div>
  </section>`;
}

function page(meta, bodyHtml) {
  return `<!doctype html><html lang="es"><head><meta charset="utf-8">
  <title>${meta.title ? meta.title.replace(/<[^>]+>/g, '') : ''}</title>
  <link rel="stylesheet" href="fonts.css"><link rel="stylesheet" href="print.css">
  ${meta.css ? `<link rel="stylesheet" href="${meta.css}">` : ''}
  ${meta.orientation === 'landscape' ? '<style>@page{size:Letter landscape;margin:0.55in 0.6in 0.65in}@page cover{margin:0}.cover{width:11in;height:8.5in}.cover .eyebrow{top:2.3in}.cover h1{top:2.65in}.cover .sub{top:4.3in}</style>' : ''}
  </head><body>${cover(meta)}<main>${bodyHtml}</main></body></html>`;
}

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const only = process.argv.slice(2);
  const files = fs.readdirSync(DOCS).filter((f) => /\.(md|html)$/.test(f))
    .filter((f) => !only.length || only.some((o) => f.startsWith(o)));
  const browser = await chromium.launch();
  for (const f of files) {
    const raw = fs.readFileSync(path.join(DOCS, f), 'utf8');
    const { meta, body } = parseFrontMatter(raw);
    const html = page(meta, f.endsWith('.md') ? marked.parse(body) : body);
    const tmp = path.join(SRC, `_render_${f}.html`);
    fs.writeFileSync(tmp, html);
    const p = await browser.newPage();
    await p.goto('file://' + tmp, { waitUntil: 'networkidle' });
    await p.evaluate(() => document.fonts.ready);
    const outName = (meta.file || f.replace(/\.(md|html)$/, '')) + '.pdf';
    const footerLabel = (meta.footer || meta.title || '').replace(/<[^>]+>/g, '');
    await p.pdf({
      path: path.join(OUT, outName),
      format: 'Letter',
      landscape: meta.orientation === 'landscape',
      printBackground: true,
      preferCSSPageSize: true,
      displayHeaderFooter: true,
      headerTemplate: '<span></span>',
      footerTemplate: `<div style="width:100%;font-family:Helvetica,Arial,sans-serif;font-size:6.5pt;color:#8A8CA0;padding:0 0.75in;display:flex;justify-content:space-between;">
        <span>ArcelorMittal México · Capacitación y Desarrollo · ${footerLabel}</span><span class="pageNumber"></span></div>`,
    });
    await p.close();
    if (!process.env.KEEP) fs.unlinkSync(tmp);
    console.log('PDF', outName);
  }
  await browser.close();
})();
