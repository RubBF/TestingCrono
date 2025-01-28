import { test, expect } from '@playwright/test';

test.describe('Cobranza Judicial - Pruebas Automatizadas', () => {
  test('Validar flujo completo de Cobranza Judicial', async ({ page }) => {
    // Navegar a la página principal
    await page.goto('https://caep.cronodemo.cl/');

    // Iniciar sesión
    await page.getByPlaceholder('Usuario').fill('becerra');
    await page.getByPlaceholder('Usuario').press('Tab');
    await page.getByPlaceholder('Contraseña').fill('p0w3r3mm4');
    await page.getByRole('button', { name: 'Iniciar sesión' }).click();

    // Navegar por el menú
    await page.getByText('Cobranza Judicial').nth(2).click();
    await page.getByText('Gastos y Bitácora Judicial').click();
    await page.getByRole('link', { name: 'Ficha Cliente' }).click();
    await expect(page.locator('iframe[name="ifr_contenido"]').contentFrame().getByText('N° Carpeta:')).toBeVisible();

    // Validar opciones dentro del iframe
    const iframe = await page.frameLocator('iframe[name="ifr_contenido"]');
    await iframe.getByLabel('Rut').click();
    await iframe.getByLabel('Rut').fill('13.125.345-1');
    await iframe.getByRole('button', { name: 'Consultar' }).click();
    await iframe.locator('#gv_detalle_LinkButton1_0').click();
    await expect(iframe.getByText('Seleccione el crédito que desea consultar. RUT del Cliente: Nombre: Comuna:')).toBeVisible();

    // Generar reporte de cobranza judicial
    await iframe.locator('#gv_cob_hist_LinkButton1_0').click();
    await expect(iframe.getByRole('button', { name: 'Informe Cobranza' })).toBeVisible();

    // Manejar la nueva ventana emergente (popup)
    const [reportPage] = await Promise.all([
      page.waitForEvent('popup'),
      iframe.getByRole('button', { name: 'Informe Cobranza' }).click()
    ]);

    // Validar que se abre la página del informe
    await reportPage.waitForLoadState('domcontentloaded');
    await expect(reportPage.locator('text=N° Carpeta')).toBeVisible({ timeout: 30000 });
    expect(reportPage.url()).toContain(
      'https://caep.cronodemo.cl/wFiscalia/Reportes/fis_reporte.aspx?reporte=inf_fis_cobranza_judicial'
    );

    // Asegurar que la ventana emergente permanezca abierta
    await reportPage.waitForTimeout(50000); // Espera adicional para observar el informe antes de cerrar el navegador

    // Redirigir al enlace del informe completo
    await reportPage.goto(
      'https://caep.cronodemo.cl/wFiscalia/Reportes/fis_reporte.aspx?reporte=inf_fis_cobranza_judicial&creme_s_id=2781'
    );

    // Validación final
    console.log('Pruebas completadas exitosamente');
  });
});
