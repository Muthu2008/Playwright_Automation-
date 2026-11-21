const {
    Given,
    When,
    Then,
    setDefaultTimeout
} = require('@cucumber/cucumber');

setDefaultTimeout(30 * 1000);

const { POManager } = require('../../pageobject/POManager');
const { chromium } = require('playwright');
const{page}=require('@playwright/test');
const playwright=require('@playwright/test');





Given('login into Ecommers appliacrion with {string} and {string}',{timeout:100*1000}, async function (username, password) {
   const loginpage1 = this.poManger.getLoginPage();
  await loginpage1.goTo();
   await loginpage1.validLogin(username,password);
   
 
});

When('add {string} to Card',async function (productName) {
    await this.page.waitForLoadState('networkidle');
    const db= this.poManger.getDashBoardPage();

  await db.searchProduct(productName);
  await db.clickCart();
   await this.page.locator("div li").first().waitFor();
 const ck=this.poManger.getcheckOutPage();
  await ck.checkOutProduct();
  const placeorder=this.poManger.getplaceOderPage();
  await placeorder.placeOrderdetails();

 
});
Then('verify product is displayed in the cart', async function () {
   const oc=this.poManger.getorderConformationPage();
    this.transid=await oc.myOrder();
console.log(this.transid);
oc.clickOrder();
 const myOrderpage=this.poManger.getMyOderPage();
 await myOrderpage.viewProduct(this.transid);  
});

