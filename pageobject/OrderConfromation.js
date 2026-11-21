const {expect}=require('@playwright/test');

class OrderConfromation
{

    constructor(page) {
        this.page = page;

        this.conformationMsg = page.getByText("Thankyou for the order.");
        this.transactionID = page.locator("label.ng-star-inserted");
        this.orderBtn= page.locator("[routerlink='/dashboard/myorders']").first();
    }

    async myOrder() {
        await this.conformationMsg.waitFor();

        const confmsg = await this.conformationMsg.textContent();
        console.log("Confirmation:", confmsg);

        const transactionID = await this.transactionID.textContent();
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
module.exports={OrderConfromation};

// const conformationMsg=await page.getByText(" Thankyou for the order. ").textContent();
//     expect(conformationMsg).toContain("Thankyou for the order.");
//    const transactionID= await page.locator("label.ng-star-inserted").textContent();
//    console.log(transactionID);
//    const cleanTransactionID = transactionID.replace(/\|/g, "").trim();


//    await page.locator("[routerlink='/dashboard/myorders']").first().click();
//    //await page.pause();