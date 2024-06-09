// @ts-check
const { defineConfig } = require('@playwright/test');

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests', // Directory where your tests are located
  fullyParallel: false, // Disable parallel tests for simplicity
  forbidOnly: !!process.env.CI, // Fail the build if test.only is used on CI
  retries: process.env.CI ? 1 : 0, // Retry failed tests once on CI
  workers: 1, // Use a single worker
  reporter: 'list', // Simplified reporter for now
  use: {
    trace: 'off', // Disable tracing for simplicity
  },
});
