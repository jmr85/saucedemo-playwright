import type { Locator, Page } from '@playwright/test';

export class ProductsPage {

    readonly page: Page;
    readonly btnAddToCart: Locator;
    readonly linkCart: Locator;
    readonly url = '/inventory.html';

    constructor(page: Page) {
        this.page = page;
        this.btnAddToCart = page.locator('#add-to-cart-sauce-labs-bike-light');
        this.linkCart = page.locator('[data-test="shopping-cart-link"]');
    }
    
    async navigate() {
        await this.page.goto(this.url);
    }
    async clickBtnAddToCart(){
        this.btnAddToCart.click();
    }

    async clickLinkCart(){
        this.linkCart.click();
    }
  
}