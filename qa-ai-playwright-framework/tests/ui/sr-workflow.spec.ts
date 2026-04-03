import { test, expect } from '@playwright/test';
import { ServiceRequestPage } from '../../pages/ServiceRequestPage';

test('SR lifecycle', async ({ page }) => {
  const sr = new ServiceRequestPage(page);

  await sr.createSR("Login issue", "High");

  await sr.updateStatus("In Progress");
  expect(await sr.getStatus()).toBe("In Progress");

  await sr.updateStatus("Closed");
  expect(await sr.getStatus()).toBe("Closed");
});