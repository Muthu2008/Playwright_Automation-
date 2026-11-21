const dataSet=require('../Utils/PlaceOderData.json');
const {test,expect}= require('@playwright/test');
const { text } = require('node:stream/consumers');
const { POManager } = require('../pageobject/POManager');

const {customtest}=require('../Utils/TestDataForOrder');
//const { dashBoard } = require('../pageobject/dashBoar.js');
for(let data of dataSet){

test(`Place Order validation for ${data.productName}`, async ({ page }) => {
    const poManger= new POManager(page);
   const loginpage1 = poManger.getLoginPage();
  await loginpage1.goTo();
   await loginpage1.validLogin(data.username,data.password);
   await page.waitForLoadState('networkidle');
   const db= poManger.getDashBoardPage();
   await db.searchProduct(data.productName);
   await db.clickCart();
  await page.locator("div li").first().waitFor();
  const ck=poManger.getcheckOutPage();
  await ck.checkOutProduct();
  const placeorder=poManger.getplaceOderPage();
  await placeorder.placeOrderdetails();
const oc=poManger.getorderConformationPage();
const transid=await oc.myOrder();
console.log(transid);
oc.clickOrder();
const myOrderpage=poManger.getMyOderPage();
await myOrderpage.viewProduct(transid);   
});
}

customtest('custom client login', async ({ page, testDataForOrder }) => {

    const poManger = new POManager(page);

    const loginpage1 = poManger.getLoginPage();

    await loginpage1.goTo();

    await loginpage1.validLogin(
        testDataForOrder.username,
        testDataForOrder.password
    );

    await page.waitForLoadState('networkidle');

    const db = poManger.getDashBoardPage();

    await db.searchProduct(testDataForOrder.productName);

    await db.clickCart();
});

 



