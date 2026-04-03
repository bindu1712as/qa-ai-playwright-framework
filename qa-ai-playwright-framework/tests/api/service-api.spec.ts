import { test, expect, request } from '@playwright/test';

test('Validate SR count API vs UI', async ({ page }) => {
  const apiContext = await request.newContext();

  const response = await apiContext.get('/api/sr-count');
  const data = await response.json();

  const uiValue = await page.locator('#open-sr-count').innerText();

  expect(parseInt(uiValue)).toBe(data.count);
});