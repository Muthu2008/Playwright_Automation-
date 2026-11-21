import { Page, Locator,expect } from "@playwright/test";

export class DashBoard {

    page: Page;
    products: Locator;
    cart: Locator;

    constructor(page: Page) {

        this.page = page;

        this.products = page.locator(".card-body");
        this.cart = page.locator("[routerlink*='cart']");
    }

    async searchProduct(productName: string) {

        const count = await this.products.count();

        console.log("Product count:", count);

        for (let i = 0; i < count; i++) {

            const name = await this.products
                .nth(i)
                .locator("b")
                .innerText();

            console.log("Product:", name);

            if (name.trim() === productName) {

                await this.products
                    .nth(i)
                    .getByRole("button", { name: "Add to cart" })
                    .click();

                break;
            }
        }
    }

    async clickCart() {
        await this.cart.click();
    }
}