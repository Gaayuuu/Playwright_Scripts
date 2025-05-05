import { test, expect } from '@playwright/test';

test('Orange HRMS Login Page', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  let pageTitle= await page.title();
    console.log('Page Title is', pageTitle);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('OrangeHRM');

  let pageURL= page.url();
  console.log('Page URL is', pageURL);

// Expect a title "to contain" a substring.
await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

await page.close();



});







/*How to Create and Run Playwright Tests

---

npx playwright test                 # runs all tests on all browsers in headless mode
npx playwright test MyTest.spec.js  # runs a specific test file
npx playwright test MyTest.spec.js --project=chromium  # runs on specific browser
npx playwright test MyTest.spec.js --project=chromium --headed
npx playwright test MyTest.spec.js --project=chromium --headed --debug*/