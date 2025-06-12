import type { Page, Locator } from "@playwright/test"

export class CheckoutStepOnePage {
    
    private readonly page: Page;
    private readonly btnContinue: Locator;
    private readonly txtFirstName: Locator;
    private readonly txtLastName: Locator;
    private readonly txtPostalCode: Locator;
    // private readonly url = '/checkout-step-one.html';

    constructor(page: Page) {
        this.page = page;
        this.txtFirstName = page.locator('#first-name');
        this.txtLastName = page.locator('#last-name');
        this.txtPostalCode = page.locator('#postal-code');
        this.btnContinue = page.locator('#continue');
    }
    
    // async navigate() {
    //     await this.page.goto(this.url);
    // }
   
    async fillFirstName(firstName: string) {
        await this.txtFirstName.click();
        await this.txtFirstName.fill(firstName);
    }

    async fillLastName(lastName: string) {
        await this.txtLastName.click();
        await this.txtLastName.fill(lastName);
    }

    async fillPostalCode(postalCode: string) {
        await this.txtPostalCode.click();
        await this.txtPostalCode.fill(postalCode);
    }

     async clickBtnContinue(){
        await this.btnContinue.click();
    }
}