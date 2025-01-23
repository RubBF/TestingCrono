import fs from 'fs';
import path from 'path';

const directory = './reportes';

// Verificar si la carpeta existe
if (!fs.existsSync(directory)) {
  console.log('La carpeta "reportes" no existe. No hay nada que limpiar.');
  process.exit(0); // Salir del script sin errores
}

// Eliminar todos los archivos en la carpeta "reportes"
fs.readdir(directory, (err, files) => {
  if (err) throw err;

  for (const file of files) {
    fs.unlink(path.join(directory, file), (err) => {
      if (err) throw err;
    });
  }
});
