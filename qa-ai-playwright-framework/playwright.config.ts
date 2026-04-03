import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

/**
 * 🌍 Environment Setup
 */
const ENV = process.env.ENV || 'qa';

const baseURLs: Record<string, string> = {
  dev: 'https://dev.crm.com',
  qa: 'https://qa.crm.com',
  prod: 'https://prod.crm.com'
};

const baseURL = baseURLs[ENV];

if (!baseURL) {
  throw new Error(`❌ Invalid ENV: ${ENV}`);
}

export default defineConfig({
  testDir: './tests',

  timeout: 60000,

  expect: {
    timeout: 10000,
  },

  fullyParallel: true,

  retries: process.env.CI ? 2 : 0,

  reporter: [
    ['html', { open: 'never' }],
    ['list']
  ],

  use: {
    baseURL: baseURL,

    headless: true,

    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});