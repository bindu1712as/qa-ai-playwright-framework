import { test, expect } from '@playwright/test';
import { ServiceDashboardPage } from '../../pages/ServiceDashboardPage';
import { validateGraph } from '../../utils/ai/graphValidator';

test('Dashboard Validation', async ({ page }) => {
  const dash = new ServiceDashboardPage(page);

  await dash.navigate();
  const count = await dash.getSRCount();

  expect(count).toBeGreaterThan(0);

  await page.screenshot({ path: 'graph.png' });
  const result = await validateGraph('graph.png');

  console.log(result);
});