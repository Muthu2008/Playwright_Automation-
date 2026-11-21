import { Page,Locator,expect} from "@playwright/test";

export class MyOrder
{

    page:Page;
    productRow:Locator;
    
    constructor(page:Page)
    {

        this.page=page;
        this.productRow = page.locator("tbody tr");

    }
    async viewProduct(transid:any)
    {


         await expect(this.productRow.first()).toBeVisible();
    
   await this.productRow.last().waitFor();

console.log(await this.productRow.count());

for (let i = 0; i < await this.productRow.count(); i++) {

    const proName = await this.productRow
        .nth(i)
        .locator("td")
        .first()
        .textContent();

    //console.log("Order ID:", proName?.trim());
    //console.log("Transaction ID:", transid);

    if (proName?.trim() === transid) {

        await this.productRow
            .nth(i)
            .getByRole('button', { name: 'View' })
            .click();

        break;
    }
}
    };
}
//module.exports={MyOrder};