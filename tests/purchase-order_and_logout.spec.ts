import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutStepOnePage } from '../pages/CheckoutStepOnePage';
import { CheckoutStepTwoPage } from '../pages/CheckoutStepTwoPage';
import { CheckoutCompletePage } from '../pages/CheckoutCompletePage';
import { SidebarComponent } from '../components/SidebarComponent';
import dotenv from 'dotenv';

dotenv.config();

test.describe('Flujo de orden de compra', () => {
    
    test('El usuario puede completar una orden de compra exitosamente', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await test.step('Dado que navego al Inicio de SauceDemo', async () => {
            await page.goto('');
        })

        await test.step('login del sitio SauceDemo', async () => {
            await loginPage.doLogin(process.env.USER_NAME!, process.env.PASSWORD!);
            await expect(page).toHaveURL(/.*inventory/);
        })

        await test.step('Validar que el usuario se encuentra en la página de productos', async () => {
            const productsPage = new ProductsPage(page);
            const productsTitle = await productsPage.getTitleProducts();
            await expect(productsTitle).toHaveText('Products');
        })

        await test.step('Agregar producto al carrito', async () => {
            const productsPage = new ProductsPage(page);
            await productsPage.clickBtnAddToCart();
            await expect(await productsPage.getBadgeCartCount()).toHaveText('1');
            await productsPage.clickLinkCart();
        })

        await test.step('Ir al carrito y proceder al checkout', async () => {
            const cartPage = new CartPage(page);
            await expect(page).toHaveURL(/.*cart/);
            await cartPage.clickBtnCheckout();
        })

        await test.step('Completar información de Checkout Step One', async () => {
            const checkoutOnePage = new CheckoutStepOnePage(page);
            await expect(page).toHaveURL(/.*checkout-step-one/);
            await checkoutOnePage.fillFirstName('John');
            await checkoutOnePage.fillLastName('Doe');
            await checkoutOnePage.fillPostalCode('12345');
            await checkoutOnePage.clickBtnContinue();
        })

        await test.step('Finalizar la orden de compra', async () => {
            const checkoutStepTwoPage = new CheckoutStepTwoPage(page);
            await expect(page).toHaveURL(/.*checkout-step-two/);
            await checkoutStepTwoPage.clickBtnFinish();
        })

        await test.step('Validar mensaje de orden completada y regresar al inicio', async () => {
            const checkoutCompletePage = new CheckoutCompletePage(page);
            await expect(page).toHaveURL(/.*checkout-complete/);
            await expect(await checkoutCompletePage.getMsgFinal()).toHaveText('Thank you for your order!');
            await checkoutCompletePage.clickBtnBackHome();
        })
    });

    test('El usuario puede cerrar sesion', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const sidebarComponent = new SidebarComponent(page);

        await test.step('Dado que navego al Inicio de SauceDemo', async () => {
            await page.goto('');
        })

        await test.step('login del sitio SauceDemo', async () => {
            await loginPage.doLogin(process.env.USER_NAME!, process.env.PASSWORD!);
            await expect(page).toHaveURL(/.*inventory/);
        })

        await test.step('Cerrar sesión desde el menú lateral', async () => {
            await sidebarComponent.clickMenu();
            await sidebarComponent.clickLogout();
            await expect(page).toHaveURL(/.*/);
        })
    })
    
})
