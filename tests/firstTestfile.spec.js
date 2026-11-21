const {test, expect} = require('@playwright/test');

test('browser with context',async ({browser}) =>
{
const brower=await browser.newContext();
const page=await brower.newPage();
const password=page.locator("#password")
const username=page.locator("#username");
await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
await username.fill("rahulshettyacademy");
await password.fill("Learning@830$3mK2");
await page.locator("[type='submit']").click();


console.log(await page.locator(".card-body a").first().textContent());
console.log(await page.locator(".card-body a").nth(2).textContent());
console.log(await page.locator(".card-body a").last().textContent());

});

test('browser lanch',async ({ page }) =>
{
await page.goto("https://google.com");
 console.log(await page.title());
 await expect(page).toHaveTitle("Google");
});