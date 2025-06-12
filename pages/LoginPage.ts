import type { Locator, Page } from '@playwright/test';

export class LoginPage {

    private readonly page: Page;
    private readonly txtUserName: Locator;
    private readonly txtPassword: Locator;
    private readonly btnLogin: Locator;

    constructor(page: Page) {
        this.page = page;
        this.txtUserName = page.locator('[data-test="username"]');
        this.txtPassword = page.locator('[data-test="password"]');
        this.btnLogin = page.locator('[data-test="login-button"]')
    }

    async doLogin(userName: string = 'standard_user', password: string = 'secret_sauce') {
        await this.txtUserName.click();
        await this.txtUserName.fill(userName);
        await this.txtUserName.press('Tab');
        await this.txtPassword.fill(password);
        await this.btnLogin.click();
    }  
}