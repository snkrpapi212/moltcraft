const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--enable-webgl']
  });
  
  const context = await browser.newContext();
  const page = await context.newPage();
  
  await page.goto('http://localhost:3080', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(6000);
  
  // Set camera to look at downtown (where buildings are)
  await page.evaluate(() => {
    if (window.camera) {
      window.camera.position.set(0, 40, 60); // High up, looking down at city
      window.camera.lookAt(0, 0, 0);
    }
  });
  await page.waitForTimeout(2000);
  
  await page.screenshot({ path: '/tmp/moltcraft_city_aerial.png', fullPage: true });
  console.log('Aerial city screenshot saved');
  
  // Also try looking at downtown from ground level
  await page.evaluate(() => {
    if (window.camera) {
      window.camera.position.set(-15, 20, 20);
      window.camera.lookAt(0, 10, 0);
    }
  });
  await page.waitForTimeout(2000);
  
  await page.screenshot({ path: '/tmp/moltcraft_city_downtown.png', fullPage: true });
  console.log('Downtown screenshot saved');
  
  await browser.close();
})();
