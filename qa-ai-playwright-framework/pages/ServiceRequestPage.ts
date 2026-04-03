import { Page } from '@playwright/test';

export class ServiceRequestPage {
  constructor(private page: Page) {}

  async createSR(title: string, priority: string) {
    await this.page.click('#create');
    await this.page.fill('#title', title);
    await this.page.selectOption('#priority', priority);
    await this.page.click('#submit');
  }

  async updateStatus(status: string) {
    await this.page.selectOption('#status', status);
    await this.page.click('#save');
  }

  async getStatus() {
    return this.page.locator('#status').inputValue();
  }
}