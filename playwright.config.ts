import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 30_000,
  testDir: 'tests',
  use: {
    baseURL: 'https://fnb.kiotviet.vn',
    headless: true,
    locale: 'vi-VN',
  },
  reporter: [['list']],
});
