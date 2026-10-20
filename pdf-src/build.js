// Renders the English PDFs from the HTML sources in this folder.
// Usage: node pdf-src/build.js   (needs Playwright + Chromium)
const { chromium } = require('playwright');
const path = require('path');

const jobs = [
  { src: 'presentation-en.html', out: 'job-search-bot-presentation-EN.pdf', pageNumbers: true },
  { src: 'verify-en.html', out: 'verify-documentation-EN.pdf', pageNumbers: false },
];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  for (const job of jobs) {
    await page.goto('file://' + path.join(__dirname, job.src), { waitUntil: 'load' });
    await page.pdf({
      path: path.join(__dirname, '..', 'assets', job.out),
      format: 'A4',
      preferCSSPageSize: true,
      printBackground: true,
      displayHeaderFooter: job.pageNumbers,
      headerTemplate: '<span></span>',
      footerTemplate: '<div style="width:100%;text-align:center;font-size:7pt;color:#999;font-family:DejaVu Sans"><span class="pageNumber"></span></div>',
    });
    console.log('wrote assets/' + job.out);
  }
  await browser.close();
})();
