import { test } from '@playwright/test';
import { analyzeFailure } from '../utils/ai/aiDebugger';

test.afterEach(async ({}, testInfo) => {
  if (testInfo.status !== 'passed') {
    const analysis = await analyzeFailure(testInfo.error?.message || '');
    console.log("AI Debug:", analysis);
  }
});