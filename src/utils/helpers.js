import fs from 'fs';

export async function capturarPantalla(page, nombreArchivo) {
  const ruta = `src/reportes/${nombreArchivo}.png`;
  await page.screenshot({ path: ruta });
  console.log(`Captura guardada en: ${ruta}`);
}

export async function registrarLog(mensaje) {
  const ruta = 'src/reportes/logs.txt';
  fs.appendFileSync(ruta, `${new Date().toISOString()} - ${mensaje}\n`);
  console.log(mensaje);
}
