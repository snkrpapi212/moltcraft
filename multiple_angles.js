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
  
  // Different camera positions (we'll inject this via page.evaluate)
  const cameraAngles = [
    { name: 'front', x: 0, y: 20, z: 50, lookX: 0, lookY: 5, lookZ: 0 },
    { name: 'side', x: 50, y: 25, z: 0, lookX: 0, lookY: 5, lookZ: 0 },
    { name: 'corner', x: 40, y: 30, z: 40, lookX: 0, lookY: 5, lookZ: 0 },
    { name: 'aerial', x: 0, y: 80, z: 30, lookX: 0, lookY: 0, lookZ: 0 },
    { name: 'closeup', x: 0, y: 8, z: 25, lookX: 0, lookY: 5, lookZ: 0 },
  ];
  
  await page.goto('http://localhost:3060', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(5000);
  
  // Check if Three.js is loaded
  const threeLoaded = await page.evaluate(() => {
    return !!(window.camera && window.scene);
  });
  
  if (!threeLoaded) {
    console.log('Three.js not loaded yet, waiting...');
    await page.waitForTimeout(5000);
  }
  
  console.log('Page loaded, taking screenshots from different angles...');
  
  for (const angle of cameraAngles) {
    // Set camera position via JavaScript
    await page.evaluate((pos) => {
      if (window.camera && window.scene) {
        window.camera.position.set(pos.x, pos.y, pos.z);
        window.camera.lookAt(pos.lookX, pos.lookY, pos.lookZ);
      }
    }, angle);
    
    await page.waitForTimeout(1000);
    
    const screenshotPath = path.join('/tmp', `moltcraft_${angle.name}.png`);
    await page.screenshot({ path: screenshotPath, fullPage: true });
    console.log(`Saved: ${angle.name} (${angle.x}, ${angle.y}, ${angle.z})`);
  }
  
  await browser.close();
  console.log('\nDone! All screenshots saved.');
})();
