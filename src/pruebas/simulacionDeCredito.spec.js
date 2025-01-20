import { test, expect } from '@playwright/test';
import { realizarLogin } from '../utils/login';
import { capturarPantalla, registrarLog } from '../utils/helpers';

test('Simulación de Crédito', async ({ page }) => {
  registrarLog('Iniciando caso de prueba: Simulación de Crédito');

  // Paso 1: Realizar login
  await realizarLogin(page);
  registrarLog('Login exitoso');
  await capturarPantalla(page, 'login_exitoso');

  // Paso 2: Acceder al módulo "Colocaciones" y "Simulador de Créditos"
  await page.getByLabel('Colocaciones', { exact: true }).check();
  registrarLog('Seleccionado el módulo "Colocaciones"');
  await page.getByRole('link', { name: 'Simulador de Créditos', exact: true }).click();
  registrarLog('Accedido al simulador de créditos');
  await capturarPantalla(page, 'simulador_acceso');

  // Paso 3: Completar los datos en el simulador dentro del iframe
  const iframeLocator = page.frameLocator('iframe[name="ifr_contenido"]');

  // Ingresar RUT
  await iframeLocator.getByLabel('Rut').fill('1.558.509-65');
  registrarLog('RUT ingresado');
  await capturarPantalla(page, 'rut_ingresado');

  // Consultar RUT
  await iframeLocator.getByRole('button', { name: 'Consultar' }).click();
  registrarLog('Consulta de RUT realizada');
  await capturarPantalla(page, 'consulta_rut');

  // Ingresar monto solicitado
  await iframeLocator.getByLabel('Monto Solicitado', { exact: true }).fill('1000000');
  registrarLog('Monto solicitado ingresado');
  await capturarPantalla(page, 'monto_ingresado');

  // Seleccionar forma de pago
  await iframeLocator.getByLabel('Forma Pago Cuotas').selectOption('1');
  registrarLog('Forma de pago seleccionada');
  await capturarPantalla(page, 'forma_pago_seleccionada');

  // Seleccionar día de pago
  await iframeLocator.getByRole('link', { name: '30' }).click();
  registrarLog('Día de pago seleccionado');
  await capturarPantalla(page, 'dia_pago_seleccionado');

  // Seleccionar la opción "601 - EMERGENCIA"
  await iframeLocator.locator('#ddl_procm_s_id').selectOption('601');
  registrarLog('Seleccionada la opción 601 - EMERGENCIA en el menú desplegable');
  await capturarPantalla(page, 'opcion_emergencia_seleccionada');

  // Esperar que el evento onchange se complete
  await page.waitForTimeout(2000);

  // Calcular cuotas
  await iframeLocator.getByRole('button', { name: 'Calcular Cuotas' }).click();
  registrarLog('Cálculo de cuotas realizado');
  await capturarPantalla(page, 'calculo_cuotas');

  // Validar que las cuotas están visibles
  await expect(iframeLocator.getByRole('columnheader', { name: 'V.Cuota' })).toBeVisible();
  registrarLog('Resultados del cálculo de cuotas visibles');

  // Seleccionar la primera opción de cálculo
  await iframeLocator.locator('#gv_calculo_credito_lkb_selecciona_0').click();
  registrarLog('Primera opción de cálculo seleccionada');
  await capturarPantalla(page, 'opcion_calculo_seleccionada');

  // Validar que los campos necesarios sean visibles
  await expect(iframeLocator.locator('#txt_simue_n_cantidad_cuota')).toBeVisible();
  await expect(iframeLocator.locator('#gv_calculo_cuota')).toBeVisible();
  registrarLog('Campos de simulación visibles');
  await capturarPantalla(page, 'simulador_finalizado');
});
