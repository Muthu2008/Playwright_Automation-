const base=require('@playwright/test');

exports.customTest=base.test.extend({

    authendicationPage : async({page},use)=>{

 await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  await page.locator("#userEmail").fill("kavinilani@gmail.com");
  await page.locator("#userPassword").fill("MuthuAmmu@2026");
  await page.locator("#login").click();
  await page.waitForLoadState("networkidle");
//   await context.storageState({ path: "state.json" });

  await use(page);
        
    }

});


