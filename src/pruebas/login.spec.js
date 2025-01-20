// Importamos las librerías necesarias desde Playwright
import { test, expect } from '@playwright/test';

// Caso de prueba para validar el login y la disponibilidad del sistema
test('Validar login y la versión del aplicativo', async ({ page }) => {
  // Navegar a la URL principal
  await page.goto('https://caep.cronodemo.cl/');

  // Completar el login
  await page.getByPlaceholder('Usuario').fill('becerra');
  await page.getByPlaceholder('Contraseña').fill('p0w3r3mm4');
  await page.getByRole('button', { name: 'Iniciar sesión' }).click();

  // Verificar que la página contiene el encabezado de versión
  const versionText = await page.getByRole('heading', { name: /Versión:/ }).textContent();
  console.log('Versión del aplicativo:', versionText);

  // Verificar que la versión contiene la palabra "Versión:"
  expect(versionText).toContain('Versión:');
});
