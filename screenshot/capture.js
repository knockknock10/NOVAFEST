import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });
  // Ensure the page renders any initial animations
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({ path: '../E_Com/landing.png' });
  await browser.close();
})();
