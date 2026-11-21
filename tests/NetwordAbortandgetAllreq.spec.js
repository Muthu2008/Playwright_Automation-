const {test, expect} = require('@playwright/test');

test('window hadle', async ({ browser }) => 
    {
        const context=await browser.newContext();
        const page=await context.newPage();
         const usename=page.locator("#username");
    //await page.route('**/*.{jpg,png,jpng}',route=> route.abort());
   // await page.on('request',request=>console.log(request.url()));
 page.on('response', response => {
    console.log(response.status(), response.url());
});

        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
         await page.locator("#username").fill("rahulshettyacademy");
         await page.locator("#password").fill("Learning@830$3mK2");
         await page.locator("#signInBtn").click();
         await page.locator(".card").last().waitFor();

         //await page.pause();




    });
