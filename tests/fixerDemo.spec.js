const { expect } =require('@playwright/test');
const { customTest } =require('../Utils/fixture.js');

customTest('fixture demo',async({ authendicationPage })=>{
     

    await authendicationPage.goto("https://rahulshettyacademy.com/client/#/dashboard/dash");

})