import { test } from '@playwright/test';
import MantenedorTasaInstitucionesPage from '../paginas/MantenedorTasaInstitucionesPage.js';
import { realizarLogin as login } from '../utils/login.js';

test.describe('Validar Mantenedor de Tasa Instituciones', () => {
  test.beforeEach(async ({ page }) => {
    // Reutiliza el login antes de interactuar con el mantenedor
    await login(page);
  });

  test('Validar flujo en Mantenedor de Tasa Instituciones', async ({ page }) => {
    const mantenedorPage = new MantenedorTasaInstitucionesPage(page);

    // Abrir el mantenedor
    await mantenedorPage.abrirMantenedorTasaInstituciones();

    // Completar formulario de tasas
    const iframe = await page.locator('iframe[name="ifr_contenido"]').contentFrame();
    if (!iframe) {
      throw new Error('El iframe ifr_contenido no está disponible.');
    }

    // Realizar acciones dentro del iframe
    await iframe.getByRole('link', { name: '' }).click();
    await iframe.getByLabel('Codigo Convenio').click();
    await iframe.getByLabel('Codigo Convenio').fill('007');
    await iframe.getByLabel('Convenio Nombre').click();
    await iframe.getByLabel('Convenio Nombre').fill('Testing');
    await iframe.getByLabel('Tasa', { exact: true }).click();
    await iframe.getByLabel('Tasa', { exact: true }).fill('20');
    await iframe.getByLabel('Tasa Primer Crédito').click();
    await iframe.getByLabel('Tasa Primer Crédito').fill('20');
    await iframe.getByText('Seleccionar Forma Pago').click();
    await iframe.getByRole('cell', { name: 'Descuento por Planilla (DxP)' }).getByRole('checkbox').check();
    await iframe.getByTitle('Elija la o las Forma de Pago').locator('a').click();
    await iframe.getByText('Seleccionar Instituciones').click();
    await iframe.getByRole('cell', { name: 'QA PRUEBA' }).getByRole('checkbox').check();
    await iframe.getByTitle('Elija la o las Instituciones').locator('a').click();
  });
});
