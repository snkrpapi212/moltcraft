const { chromium } = require('playwright');
const path = require('path');

(async () => {
  console.log('Starting Playwright...');
  
  const browser = await chromium.launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const context = await browser.newContext();
  const page = await context.newPage();
  
  await page.goto('http://localhost:3070', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(5000);
  
  console.log('Page loaded, testing weather and time features...');
  
  // Test different weather conditions
  const weatherTests = ['rain', 'snow', 'clear'];
  
  for (const weather of weatherTests) {
    await page.evaluate((w) => setWeather(w), weather);
    await page.waitForTimeout(2000);
    
    const screenshotPath = path.join('/tmp', `moltcraft_weather_${weather}.png`);
    await page.screenshot({ path: screenshotPath, fullPage: true });
    console.log(`Saved weather: ${weather}`);
  }
  
  // Set back to clear and capture the castle with sky
  await page.evaluate(() => setWeather('clear'));
  await page.waitForTimeout(1000);
  
  // Different angles
  const angles = [
    { name: 'sunset_view', x: 0, y: 20, z: 50 },
    { name: 'night_view', x: 30, y: 15, z: 30 }
  ];
  
  for (const angle of angles) {
    await page.evaluate((pos) => {
      window.camera.position.set(pos.x, pos.y, pos.z);
      window.camera.lookAt(0, 5, 0);
    }, angle);
    await page.waitForTimeout(1500);
    
    const screenshotPath = path.join('/tmp', `moltcraft_${angle.name}.png`);
    await page.screenshot({ path: screenshotPath, fullPage: true });
    console.log(`Saved: ${angle.name}`);
  }
  
  await browser.close();
  console.log('\nDone! All screenshots saved to /tmp/');
})();
