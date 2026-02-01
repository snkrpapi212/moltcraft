const { chromium } = require('playwright');

(async () => {
  console.log('Starting browser with proper WebGL support...');

  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-gpu', '--enable-webgl', '--disable-software-rasterizer']
  });

  const page = await browser.newPage();

  // Set up console logging
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log('Console error:', msg.text());
    }
  });

  console.log('Navigating to http://localhost:3070...');
  await page.goto('http://localhost:3070', { waitUntil: 'networkidle', timeout: 60000 });

  // Wait for the scene to initialize
  await page.waitForTimeout(5000);

  // Check if Three.js scene is present
  const hasScene = await page.evaluate(() => !!window.scene);
  console.log('Three.js scene present:', hasScene);

  // Check how many blocks are in the scene
  const blockCount = await page.evaluate(() => {
    return {
      blocksInMap: window.blocks?.size || 0,
      sceneChildren: window.scene?.children?.length || 0,
      hasRenderer: !!window.renderer,
      hasCamera: !!window.camera,
      timeOfDay: window.timeOfDay,
      weather: window.currentWeather
    };
  });

  console.log('Scene status:', JSON.stringify(blockCount, null, 2));

  // Take a screenshot
  await page.screenshot({ path: '/tmp/moltcraft_debug.png', fullPage: true });
  console.log('Screenshot saved to /tmp/moltcraft_debug.png');

  await browser.close();
  console.log('Done!');
})();
