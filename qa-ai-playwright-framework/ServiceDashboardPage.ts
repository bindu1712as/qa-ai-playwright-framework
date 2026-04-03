import { Page } from '@playwright/test';

export class ServiceDashboardPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('/service-dashboard');
  }

  async getOpenSRCount(): Promise<number> {
    const count = await this.page.locator('#open-sr-count').innerText();
    return parseInt(count);
  }

  async getSRList(): Promise<string[]> {
    return await this.page.locator('.sr-row').allTextContents();
  }

  async filterByPriority(priority: string) {
    await this.page.selectOption('#priority-filter', priority);
  }
}