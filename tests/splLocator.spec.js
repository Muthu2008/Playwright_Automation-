import {test,expect} from '@playwright/test';

test('splapage validation', async ({ page }) => {


    page.goto("http://rahulshettyacademy.com/angularpractice/");


    await page .getByLabel('Check me out if you Love IceCreams!').click();
    await page.getByPlaceholder('Password').fill("muthukumar");
    await page.getByRole('button',{name:'submit'}).click(); 
    await page.getByRole('link',{name:'shop'}.click());
})