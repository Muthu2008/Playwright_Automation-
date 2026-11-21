const {test,expect}=   require('@playwright/test');
const { text } = require('node:stream/consumers');
test('practice page validation', async ({ page }) => {

    const productName = 'ZARA COAT 3';

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

    await page.locator('#userEmail').fill("kavinilani@gmail.com");
    await page.locator('#userPassword').fill("MuthuAmmu@2026");
    await page.locator('#login').click();

    await page.waitForLoadState('networkidle');

    const products = page.locator('.card-body');

    const count = await products.count();
   // console.log("Product count:", count);

    for (let i = 0; i < count; i++) {

       const name=await products.nth(i).locator('b').textContent();
        if (name === productName) 
            {
                await products.nth(i).getByRole('button',{name:'Add to cart'}).click();
                break;
                
            
           }

        }
 
   
  
  await page.locator("[routerlink*='cart']").click();
  await page.locator("div li").first().waitFor();

 const bool= await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
 expect(bool).toBeTruthy();

 await page.locator("text=Checkout").click(); 



 await page.locator("[value='4542 9931 9292 2293']").fill("4542 9931 9292 2293");
 //selecting the month and year from the dropdown
 await page.locator('//div[text()="Expiry Date "]/following-sibling::select').first().selectOption("12");
    await page.locator('//div[text()="Expiry Date "]/following-sibling::select').nth(1).selectOption("26");
    await page.locator('//div[text()="CVV Code "]/following-sibling::input').fill("123");
    await page.locator('//div[text()="Name on Card "]/following-sibling::input').fill("city");
    
 await page.locator("[placeholder*='Country']").pressSequentially("Ind");

const buttons = page.locator(".ta-results button");
await buttons.last().waitFor();

const optionCount = await buttons.count();
//await page.pause();
for (let i = 0; i < optionCount ; i++) {
  const  text = await buttons.nth(i).innerText();

    if (text.trim() === "India") {
        await buttons.nth(i).click();
        break;
    }
}

    await page.locator('.action__submit').click();



    const conformationMsg=await page.getByText(" Thankyou for the order. ").textContent();
    expect(conformationMsg).toContain("Thankyou for the order.");
   const transactionID= await page.locator("label.ng-star-inserted").textContent();
   console.log(transactionID);
   const cleanTransactionID = transactionID.replace(/\|/g, "").trim();


   await page.locator("[routerlink='/dashboard/myorders']").first().click();
   await page.pause();
const productRow = page.locator("tbody tr");
//await page.locator(productRow).first().waitFor();
console.log(await productRow.count()); 
for (let i = 0; i < await productRow.count(); i++) {
    const proName=await productRow.nth(i).locator("th").textContent();
    console.log("proName =", JSON.stringify(proName));
     console.log("transactionID =", JSON.stringify(transactionID));
     console.log("Equal =", proName?.trim() === transactionID?.trim());
    if (proName?.trim()===cleanTransactionID){
        await productRow.nth(i).locator('button:has-text("View")').click();
        break;
    }   
}



 

  



    
    
    
});

