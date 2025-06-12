import type { Page, Locator } from "@playwright/test"

export class CheckoutStepTwoPage {
    
    private readonly page: Page;
    private readonly btnFinish: Locator;
    // private readonly url = '/checkout-step-two.html';

    constructor(page: Page) {
        this.page = page;
        this.btnFinish = page.locator('#finish');
    }
    
    // async navigate() {
    //     await this.page.goto(this.url);
    // }
    
    async clickBtnFinish(){
        await this.btnFinish.click();
    }

}