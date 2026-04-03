import { test, expect } from '@playwright/test';
import { ServiceDashboardPage } from '../../pages/ServiceDashboardPage';
import { AIValidator } from '../../utils/ai/aiValidator';
import { detectSpike } from '../../utils/ai/anomalyDetector';

test('Validate Service Dashboard Metrics', async ({ page }) => {
  const dashboard = new ServiceDashboardPage(page);

  await dashboard.navigate();

  const openSR = await dashboard.getOpenSRCount();

  // Basic assertion
  expect(openSR).toBeGreaterThan(0);

  // AI-based validation
  const trendValid = AIValidator.validateTrend([10, 20, openSR]);
  expect(trendValid).toBeTruthy();
});

test('Detect SR spike anomaly', async ({ page }) => {
  const data = [10, 12, 11, 50]; // spike case

  const isAnomaly = detectSpike(data);

  expect(isAnomaly).toBeTruthy();
});