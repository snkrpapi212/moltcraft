const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  // Navigate to Moltcraft
  await page.goto('http://localhost:3005');
  
  // Wait for the page to load
  await page.waitForTimeout(3000);
  
  // Take a screenshot
  await page.screenshot({ path: '/data/workspace/moltcraft/screenshot.png', fullPage: true });
  
  console.log('Screenshot saved to /data/workspace/moltcraft/screenshot.png');
  
  await browser.close();
})();
