const { chromium } = require('playwright');
const path = require('path');

(async () => {
  console.log('Starting Playwright...');
  
  // Launch browser with slower network for better loading
  const browser = await chromium.launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const context = await browser.newContext();
  const page = await context.newPage();
  
  // Collect console messages
  const consoleMessages = [];
  page.on('console', msg => {
    const text = msg.text();
    consoleMessages.push(`[${msg.type()}] ${text}`);
  });
  
  // Collect page errors
  const pageErrors = [];
  page.on('pageerror', err => {
    pageErrors.push(err.message);
  });
  
  console.log('Navigating to http://localhost:3008...');
  
  try {
    await page.goto('http://localhost:3006', { 
      waitUntil: 'networkidle',
      timeout: 30000 
    });
    
    console.log('Page loaded, waiting for render...');
    
    // Wait a bit for Three.js to render
    await page.waitForTimeout(3000);
    
    // Take screenshot
    const screenshotPath = path.join(__dirname, '..', 'moltcraft_screenshot.png');
    await page.screenshot({ 
      path: screenshotPath,
      fullPage: true 
    });
    
    console.log(`Screenshot saved to: ${screenshotPath}`);
    
    // Print console messages
    console.log('\n--- Console Messages ---');
    consoleMessages.forEach(msg => console.log(msg));
    
    if (pageErrors.length > 0) {
      console.log('\n--- Page Errors ---');
      pageErrors.forEach(err => console.log(err));
    } else {
      console.log('\n--- No Page Errors ---');
    }
    
  } catch (error) {
    console.error('Error:', error.message);
  }
  
  await browser.close();
  console.log('\nDone!');
})();
