import { Page } from '@playwright/test';
import { AILocator } from '../utils/ai/aiLocator';

export class ServiceDashboardPage {
  private ai: AILocator;

  constructor(private page: Page) {
    this.ai = new AILocator(page);
  }

  async navigate() {
    await this.page.goto('/service-dashboard');
  }

  async getSRCount() {
    const el = await this.ai.find('#sr-count', ['.sr-count', '[data-testid="sr"]']);
    return parseInt(await el.innerText());
  }
}