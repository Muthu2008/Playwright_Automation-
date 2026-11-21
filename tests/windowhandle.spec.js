const {test, expect} = require('@playwright/test');

test('window hadle', async ({ browser }) => 
    {
        const context=await browser.newContext();
        const page=await context.newPage();
         const usename=page.locator("#username");
         page.route('**/*.{jpg,png,jpng}',route=> route.abort());


        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
const documentlink=page.locator("[href*='documents-request']");
        //await page.locator("[href*='documents-request']").click();

        const [newPage]=await Promise.all([

            context.waitForEvent('page'),
             documentlink.click(),
        ])


        
      const text=await newPage.locator("[href*='mailto']").textContent();
      console.log(text);

      await page.username.fill(text);
      await page.pause()
;



          
         

    });
