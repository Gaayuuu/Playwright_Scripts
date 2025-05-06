/*page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).*/



const { test, expect } = require('@playwright/test');

// Define a test case for logging into the OrangeHRM demo site
test('Login test on OrangeHRM site', async ({ page }) => {

  // Step 1: Navigate to the login page
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Step 2: Wait for the logo image (identified by its alt text) to appear within 10 seconds
  await page.waitForSelector('img[alt="company-branding"]', { timeout: 10000 });
  // Assert that the logo is visible on the page
  await expect(page.getByAltText('company-branding')).toBeVisible();

  // Step 3: Fill in the username and password fields using their placeholders
  await page.getByPlaceholder('Username').fill('Admin');        // Username: Admin
  await page.getByPlaceholder('Password').fill('admin123');      // Password: admin123

  // Step 4: Click the Login button using its role and accessible name
  await page.getByRole('button', { name: 'Login' }).click();

  // Step 5: Wait for a known element on the dashboard to confirm login success
  // This ensures the test does not proceed before the page is fully loaded
  await page.waitForSelector("div.oxd-topbar-header", { timeout: 10000 });

  // Step 6: Locate the username displayed in the top-right dropdown
  const userNameLocator = page.locator("p.oxd-userdropdown-name");
  // Wait for the username element to appear within 10 seconds
  await userNameLocator.waitFor({ timeout: 10000 });

  // Step 7: Extract and trim the text content of the username
  const name = (await userNameLocator.textContent()).trim();
  // Log the username to the console (for debugging)
  console.log('Logged-in username:', name);

  // Step 8: Assert that the extracted username is visible on the page
  await expect(page.getByText(name)).toBeVisible();

  // Optional: Capture a screenshot after successful login (for verification/debugging)
  await page.screenshot({ path: 'after-login.png' });
});






    test('Demo site - BuiltIn Locators', async ({ page }) => {
        // Navigate to the homepage
        await page.goto('https://www.automationexercise.com/');
      
        // Wait for the logo
        await expect(page.getByAltText('Website for automation practice')).toBeVisible();
      
        // Click on 'Signup / Login'
        await page.click("a[href='/login']");
      
        // Fill signup form
        // Wait until the input field appears
        await page.getByPlaceholder('Email Address', { timeout: 10000 });

        // Now fill in the email field
        await page.fill("//input[@data-qa='login-email']",'admin0@gmail.com');

        await page.getByPlaceholder('Password').fill('Password');
        await page.getByRole('button', { name: 'Login' }).click();
      
        // DEBUG: Wait and capture page content
        await page.waitForTimeout(3000);
        console.log(await page.content());
      
        // More reliable locator
        const pageHeader = page.locator("//img[@alt='Website for automation practice']");
        await expect(pageHeader).toBeVisible({ timeout: 10000 });
      });
      
