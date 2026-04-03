import { FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
  console.log("🚀 Starting Test Execution");
  console.log("Base URL:", process.env.BASE_URL);
}

export default globalSetup;