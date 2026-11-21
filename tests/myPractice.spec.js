const { test, expect } = require("@playwright/test");
test("My practice session", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/");
  await page.waitForLoadState();
  const vegs=[{vname:"otato - 1 Kg",quantity:"2"},
   {vname:"Onion - 1 Kg",quantity:2},
   {vname:"Orange - 1 Kg",quantity:1},
   {vname:"Almonds - 1/4 Kg",quantity:3},
   {vname:"Walnuts - 1/4 Kg",quantity:2}]
   
   for(const veg of vegs)
   {
      const product= await page.locator(".product").filter({hasText:veg.vname});
    for(let i=0;i<veg.quantity;i++)
    {
     await product.locator(".increment").click();
    }
    await product.getByRole('button',{name:"ADD TO CART"}).click();
   }
   
   await page.locator(".cart-icon").first().click();
   await page.getByRole('button',{name:"PROCEED TO CHECKOUT"}).click();

   await page.waitForLoadState();
   await page.getByRole('button',{name:'Place Order'}).click();

   await page.locator("//select").selectOption("India");
  // await page.locator(".chkAgree").check();
   await page.getByRole('button',{name:'Proceed'}).click();
  expect(await page.locator(".errorAlert").textContent()).toContain("Please accept Terms");

  await page.locator(".chkAgree").check();
   await page.getByRole('button',{name:'Proceed'}).click();

   await  page.waitForLoadState();
   await page.screenshot({path:'orderplaced.png'});
  // await page.pause();
   

});
