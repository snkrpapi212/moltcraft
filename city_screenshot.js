const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('http://localhost:3080', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(5000);
  
  await page.screenshot({ path: '/tmp/moltcraft_city.png', fullPage: true });
  console.log('City screenshot saved to /tmp/moltcraft_city.png');
  
  await browser.close();
})();
