import { Locator, Page } from '@playwright/test';

export class SidebarComponent {
  
  private readonly page: Page;
  private readonly btnMenu: Locator;
  private readonly btnAllItems: Locator;
  private readonly btnAbout: Locator;
  private readonly btnLogout: Locator;
  private readonly btnResetAppState: Locator;

  constructor(page: Page) {
    this.page = page;
    this.btnMenu = page.locator('#react-burger-menu-btn')
    this.btnAllItems = page.locator('[data-test="inventory-sidebar-link"]');
    this.btnAbout = page.locator('[data-test="about-sidebar-link"]');
    this.btnLogout = page.locator('[data-test="logout-sidebar-link"]');
    this.btnResetAppState = page.locator('[data-test="reset-sidebar-link"]');
  }

  async clickMenu() {
    await this.btnMenu.click();
  }

  async clickAllItems() {
    await this.btnAllItems.click();
  }

  async clickAbout() {
    await this.btnAbout.click();
  }

  async clickLogout() {
    await this.btnLogout.click();
  }

  async clickResetAppState() {
    await this.btnResetAppState.click();
  }

}
