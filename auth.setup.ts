import { test as setup, expect } from '@playwright/test';
import path from 'path';
import users from './config/users.json';
import { LoginPage } from './pages/LoginPage';

setup.describe.configure({ mode: 'parallel' });

users.forEach(u => {
  setup(`configure auth for ${u.label}`, async ({ page }) => {
    const loginPage = new LoginPage(page);
    if (!process.env.BASE_URL) {
      throw new Error('BASE_URL environment variable is not set');
    }
    await page.goto(process.env.BASE_URL!);
    await loginPage.doLogin(u.username, u.password);

    // await expect(page).toHaveURL(/inventory/);
    await expect(page).toHaveURL(/.*inventory/);
    const storagePath = path.resolve(__dirname, 'playwright/.auth', `users.json`);
    // const file = path.resolve(__dirname, '..', 'playwright/.auth', `${u.label}.json`);
    await page.context().storageState({ path: storagePath });
  });
});