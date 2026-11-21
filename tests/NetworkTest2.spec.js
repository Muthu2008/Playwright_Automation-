const {test,expect} = require('@playwright/test')

test("Network test",async ({page})=>{

  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  await page.locator("#userEmail").fill("kavinilani@gmail.com");
  await page.locator("#userPassword").fill("MuthuAmmu@2026");
  await page.locator("#login").click();
  await page.waitForLoadState("networkidle");
  //await page.locator("ctr.ng-star-inserted").last().waitFor();
  await page.locator(".card-body").last().waitFor();

  await page.locator("button[routerlink*='/myorder']").click();

  await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
    route =>route.continue( {url:"https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=6a9a92e0e7cd33310fbe842a"}));
    await page.getByRole('button',{name:"View"}).nth(1).click();
    await page.pause();




})