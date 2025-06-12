import type { Page, Locator } from "@playwright/test"

export class CheckoutCompletePage {

    private readonly page: Page;
    private readonly btnBackHome: Locator;
    private readonly msgFinal: Locator;
    // private readonly url = '/checkout-complete';

    constructor(page: Page) {
        this.page = page;
        this.msgFinal = page.locator('[data-test="complete-header"]');
        this.btnBackHome = page.locator('[data-test="back-to-products"]');
    }
    
    // async navigate() {
    //     await this.page.goto(this.url);
    // }
    
    async clickBtnBackHome(){
        await this.btnBackHome.click();
    }

    async getMsgFinal(): Promise<Locator> {
        return this.msgFinal;
    }
}