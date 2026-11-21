import {Page, Locator,expect } from '@playwright/test';


export class OrderConfromation
{
    page:Page;
    conformationMsg :Locator;
    transactionID:Locator;
    orderBtn:Locator;


    constructor(page:any) {
        this.page = page;

        this.conformationMsg = page.getByText("Thankyou for the order.");
        this.transactionID = page.locator("label.ng-star-inserted");
        this.orderBtn= page.locator("[routerlink='/dashboard/myorders']").first();
    }

    async myOrder() {
        await this.conformationMsg.waitFor();

        const confmsg = await this.conformationMsg.textContent();
        console.log("Confirmation:", confmsg);

        const transactionID = await this.transactionID.innerText();
        console.log("Transaction ID:", transactionID);

        const cleanTransactionID = transactionID.replace(/\|/g, "").trim();

        return cleanTransactionID;
    }

    async clickOrder()
    {
        await this.orderBtn.waitFor();
        
          await this.orderBtn.click();
    }
}
//module.exports={OrderConfromation};

