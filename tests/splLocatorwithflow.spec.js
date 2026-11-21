const {test,expect}=   require('@playwright/test');
const { text } = require('node:stream/consumers');
test('splapage data validation', async ({ page }) => {

    const productName = 'ZARA COAT 3';

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

    await page.getByPlaceholder("email@example.com").fill("kavinilani@gmail.com");
    await page.getByPlaceholder("enter your passsword").fill("MuthuAmmu@2026");
    await page.getByRole('button',{name:'login'}).click();

    await page.waitForLoadState('networkidle');

    await page.locator('.card-body').filter({hasText:"ZARA COAT 3"}).getByRole('button',{name:"Add to cart"}).click();
    await page.getByRole("listitem").getByRole('button',{name:"cart"}).click();
    await page.getByRole('button',{name:"Checkout"}).click();
    await page.getByPlaceholder("Select Country").pressSequentially("Ind");
    await page.getByRole('button',{name:"India"}).nth(1).click();

   await page.locator('//div[text()="Expiry Date "]/following-sibling::select').first().selectOption("12");
    await page.locator('//div[text()="Expiry Date "]/following-sibling::select').nth(1).selectOption("26");
    await page.locator('//div[text()="CVV Code "]/following-sibling::input').fill("123");
    await page.locator('//div[text()="Name on Card "]/following-sibling::input').fill("city");
    await page.getByText("PLACE ORDER").click()
    await expect(page.getByText("Thankyou for the order.")).toBeVisible();

});