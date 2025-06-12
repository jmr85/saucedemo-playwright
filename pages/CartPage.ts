import type { Page, Locator } from "@playwright/test"

export class CartPage {

    private readonly page: Page;
    private readonly btnCheckout: Locator;
    // private readonly url = '/cart.html';

    constructor(page: Page) {
        this.page = page;
        this.btnCheckout = page.locator('#checkout');
    }
    
    // async navigate() {
    //     await this.page.goto(this.url);
    // }
    async clickBtnCheckout(){
        await this.btnCheckout.click();
    }
}