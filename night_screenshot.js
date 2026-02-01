const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('http://localhost:3070', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(5000);
  
  // Force time to night (0.85 = around 8pm)
  await page.evaluate(() => { timeOfDay = 0.85; });
  await page.waitForTimeout(2000);
  
  await page.screenshot({ path: '/tmp/moltcraft_night.png', fullPage: true });
  console.log('Night screenshot saved');
  
  await browser.close();
})();
