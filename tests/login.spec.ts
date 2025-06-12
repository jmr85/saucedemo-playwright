import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('login', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await test.step('Dado que navego al Inicio de SauceDemo', async () => {
        await page.goto('');
    })

    await test.step('login del sitio SauceDemo', async () => {
        await loginPage.doLogin()
        await expect(page).toHaveURL(/.*inventory/);
    })
});
