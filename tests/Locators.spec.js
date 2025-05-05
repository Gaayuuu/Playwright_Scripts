import { test, expect } from '@playwright/test';

test('Locating Single Elements Demoblaze', async ({ page }) => {
  // Open the Demoblaze homepage
  await page.goto('https://www.demoblaze.com/index.html');

  // Click on login button using ID selector
  await page.click('#login2');

  // Wait for login modal to appear
  await page.waitForSelector('#logInModal', { state: 'visible' });

  // Provide username and password using CSS selectors
  await page.fill('#loginusername', 'AdminOne');
  await page.fill("input[id='loginpassword']", 'Password');

  // Click on Login button using XPath
  await page.click("//button[normalize-space()='Log in']");

// Now verify logout link
const logoutButton = await page.locator("//a[normalize-space()='Log out']");
await expect(logoutButton).toBeVisible();

  // Close the page
  await page.close();

});



test('Locators Orange HRMS', async ({ page }) => {
  // Open the Demoblaze homepage
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Provide username and password using CSS selectors
  await page.fill("input[placeholder='Username']", 'Admin');
  await page.fill("input[placeholder='Password']", 'admin123');

  // Click on Login button using XPath
  await page.click("//button[normalize-space()='Login']");

  //Click on the Hamburger Menu
  await page.click(".oxd-icon-button.oxd-main-menu-button", { timeout: 60000 });
    
  //Click Admin Tab
  await page.click("//li[@class='oxd-main-menu-item-wrapper'][1]")


  // Close the page
  await page.close();

});


  test('Locating Multiple Elements Demoshop', async ({ page }) => {
    // Open the Demoshop website
    await page.goto('https://demowebshop.tricentis.com/');

    //Locate all the productes displayed on the page

    const products = await page.$$("//div[@class='product-grid home-page-product-grid']//div//h2//a")

    for (const product of products) {
        const productName = await product.textContent();
        console.log(productName);
    }

    
    // Close the page
    await page.close();
  
});
