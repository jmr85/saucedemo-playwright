import type { Locator, Page } from '@playwright/test';

export class ProductsPage {

    private readonly page: Page;
    private readonly titleProducts: Locator;
    private readonly btnAddToCart: Locator;
    private readonly linkCart: Locator;
    private readonly badgeCartCount: Locator;
    private readonly url = 'https://www.saucedemo.com/inventory.html';

    constructor(page: Page) {
        this.page = page;
        this.titleProducts = page.locator('[data-test="title"]');
        this.btnAddToCart = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
        this.linkCart = page.locator('[data-test="shopping-cart-link"]');
        this.badgeCartCount = page.locator('[data-test="shopping-cart-badge"]');
    }
    
    async navigate() {
        await this.page.goto(this.url);
    }

    async getTitleProducts(): Promise<Locator> {
        // return await this.titleProducts.first().textContent()
        return this.titleProducts;
    }

    async clickBtnAddToCart(){
        await this.btnAddToCart.click();
    }

    async clickLinkCart(){
        await this.linkCart.click();
    }
    
    async getCartCount(): Promise<string | null> {
        return await this.badgeCartCount.textContent();
    }
    
    async getBadgeCartCount(): Promise<Locator> {
        return this.badgeCartCount;
    }
}