const { Before,After, BeforeStep, AfterStep, Status} = require("@cucumber/cucumber");
const { POManager } = require('../../../pageobject/POManager');
const playwright=require('@playwright/test');

Before(async function () {
    this. browser=await playwright.chromium.launch({headless:true});
    this.context=await this.browser.newContext();
    this.page=await this.context.newPage();

    this.poManger= new POManager( this.page);

    
})
After(function (){
    console.log("exected last");
})
BeforeStep(function()
    {

    })

AfterStep(async function ({result}) {
        
      if(result.status===Status.FAILED)
{
    await this.page.screenshot({path:'faledScreenShot.png'});
}
    })