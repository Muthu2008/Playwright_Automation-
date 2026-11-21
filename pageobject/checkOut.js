const { expect } = require('@playwright/test');

class checkOut {

    constructor(page) {
        this.page = page;
        this.checkOutBtn = page.getByText("Checkout");
        this.displayProd = page.locator(".cartSection h3");
    }

    async checkOutProduct() {

        await expect(this.displayProd).toBeVisible();

        await this.checkOutBtn.click();
    }
}

module.exports = { checkOut };