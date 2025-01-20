// playwright.config.js
import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  use: {
    baseURL: process.env.BASE_URL,
    browserName: 'chromium', // Cambiar a 'firefox' o 'webkit' si es necesario
    headless: false,          // Cambiar a false para modo visual
    viewport: { width: 1280, height: 720 },
    screenshot: 'on',
    video: 'on',
  },
  testDir: './src/pruebas',
  retries: 1,
  reporter: [['html', { open: 'never' }], ['list']],
});
