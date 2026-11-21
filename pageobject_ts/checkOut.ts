import { Page,Locator,expect } from "@playwright/test";



export class checkOut {

    page:any;
  checkOutBtn:Locator;
  displayProd:Locator;
  
    constructor(page:Page) {
        this.page = page;
        this.checkOutBtn = page.getByText("Checkout");
        this.displayProd = page.locator(".cartSection h3");
    }

    async checkOutProduct() {

        await expect(this.displayProd).toBeVisible();

        await this.checkOutBtn.click();
    }
}

//module.exports = { checkOut };