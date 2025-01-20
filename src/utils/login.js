export async function realizarLogin(page) {
  // Navegar al sitio
  await page.goto('https://caep.cronodemo.cl/');

  // Llenar las credenciales
  await page.getByPlaceholder('Usuario').fill('becerra');
  await page.getByPlaceholder('Contraseña').fill('p0w3r3mm4');

  // Iniciar sesión
  await page.getByRole('button', { name: 'Iniciar sesión' }).click();

  // Validar el éxito del login mediante la versión del aplicativo
  const versionText = await page.getByRole('heading', { name: /Versión:/ }).textContent();

  // Imprimir la versión en la consola para depuración
  console.log('Versión del aplicativo:', versionText);

  // Validar que contiene el texto esperado
  if (!versionText.includes('Versión:')) {
    throw new Error('Login fallido: No se encontró la versión del aplicativo.');
  }

  // Registro del éxito del login
  console.log('Login exitoso y usuario autenticado.');
}
