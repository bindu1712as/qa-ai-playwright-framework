import { Page, Locator } from '@playwright/test';

export class AILocator {
  constructor(private page: Page) {}

  async find(primary: string, fallbacks: string[]): Promise<Locator> {
    const primaryLoc = this.page.locator(primary);
    if (await primaryLoc.count()) return primaryLoc;

    for (const alt of fallbacks) {
      const loc = this.page.locator(alt);
      if (await loc.count()) return loc;
    }

    throw new Error("Element not found");
  }
}