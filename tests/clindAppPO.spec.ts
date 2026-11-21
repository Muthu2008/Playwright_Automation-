import { POManager } from './../pageobject_ts/POManager';

import {customTest} from '../Utils_ts/TestDataForOrder';
//const dataSet=require('../Utils/PlaceOderData.json');

//import{dataSet} from '../Utils_ts/PlaceOderData.json';
import {test,expect}from '@playwright/test';
//const dataSet = require('../Utils/PlaceOrderData.json');
import dataSet from '../Utils_ts/PlaceOderData.json';

for(let data of dataSet){

test(`Place Order validation for ${data.productName}`, async ({ page }) => {
    const poManger= new POManager(page);
   const loginpage1 = poManger.getLoginPage();
  await loginpage1.goTo(page);
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


customTest('custom client login', async ({ page, testDataForOrder }) => {

    const poManger = new POManager(page);

    const loginpage1 = poManger.getLoginPage();

    await loginpage1.goTo(page);

    await loginpage1.validLogin(
        testDataForOrder.username,
        testDataForOrder.password
    );

    await page.waitForLoadState('networkidle');

    const db = poManger.getDashBoardPage();

    await db.searchProduct(testDataForOrder.productName);

    await db.clickCart();
});


}


 



