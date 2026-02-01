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
  
  // Also collect network responses
  const networkErrors = [];
  page.on('requestfailed', request => {
    networkErrors.push(`${request.url()} - ${request.failure()?.errorText}`);
  });
  
  console.log('Navigating to http://localhost:3010...');
  
  try {
    await page.goto('http://localhost:3010', { 
      waitUntil: 'domcontentloaded',
      timeout: 10000 
    });
    
    console.log('Page loaded, waiting for render...');
    
    // Wait for potential socket connection
    await page.waitForTimeout(5000);
    
    // Print console messages
    console.log('\n--- Console Messages ---');
    consoleMessages.forEach(msg => console.log(msg));
    
    if (pageErrors.length > 0) {
      console.log('\n--- Page Errors ---');
      pageErrors.forEach(err => console.log(err));
    } else {
      console.log('\n--- No Page Errors ---');
    }
    
    if (networkErrors.length > 0) {
      console.log('\n--- Network Errors ---');
      networkErrors.forEach(err => console.log(err));
    } else {
      console.log('\n--- No Network Errors ---');
    }
    
    // Take screenshot
    const screenshotPath = path.join('/tmp', 'moltcraft_debug.png');
    await page.screenshot({ 
      path: screenshotPath,
      fullPage: true 
    });
    
    console.log(`\nScreenshot saved to: ${screenshotPath}`);
    
  } catch (error) {
    console.error('Error:', error.message);
  }
  
  await browser.close();
  console.log('\nDone!');
})();
