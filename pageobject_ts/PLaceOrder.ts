import { Page,Locator,expect } from '@playwright/test';


export class PlaceOrder {

  page:Page;
  CardNumber:Locator;
  exMonth:Locator;
  exYear:Locator;
  csv:Locator;
  cardName:Locator;
  contry:Locator;
  button:Locator;
  submitButton:Locator;
  constructor(page:any) 
  {
    this.page=page;
    this.CardNumber=page.locator("[value='4542 9931 9292 2293']");
    this.exMonth=page.locator('//div[text()="Expiry Date "]/following-sibling::select').first();
   this.exYear= page.locator('//div[text()="Expiry Date "]/following-sibling::select').nth(1);
   this.csv=page.locator('//div[text()="CVV Code "]/following-sibling::input');
   this.cardName=page.locator('//div[text()="Name on Card "]/following-sibling::input');
   this.contry=page.locator("[placeholder*='Country']"); 
   this.button=page.locator(".ta-results button");
   this.submitButton= page.locator('.action__submit');
  }
   async placeOrderdetails()
   {

    await this.CardNumber.fill("4542 9931 9292 2293");
     await this.exMonth.selectOption("12");
     await this.exYear.selectOption("26");
     await this.csv.fill("234");
     await this.cardName.fill("city");
     await this.contry.pressSequentially("Ind");

await this.button.first().waitFor();

const optionCount = await this.button.count();

for (let i = 0; i < optionCount; i++) {
    const text = await this.button.nth(i).innerText();

    if (text.trim() === "India") {
        await this.button.nth(i).click();
        break;
    }
}

await this.submitButton.click();
  }
}
//module.exports={PlaceOrder};
