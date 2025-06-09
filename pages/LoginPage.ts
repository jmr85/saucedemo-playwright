import type { Locator, Page } from '@playwright/test';

export class LoginPage {

    readonly page: Page;
    readonly txtUserName: Locator;
    readonly txtPassword: Locator;
    readonly btnLogin: Locator;

    constructor(page: Page) {
        this.page = page;
        this.txtUserName = page.locator('[data-test="username"]');
        this.txtPassword = page.locator('[data-test="password"]');
        this.btnLogin = page.locator('[data-test="login-button"]')
    }

    async doLogin() {
        await this.txtUserName.click();
        await this.txtUserName.fill('standard_user');
        await this.txtUserName.press('Tab');
        await this.txtPassword.fill('secret_sauce');
        await this.btnLogin.click();
    }  
}