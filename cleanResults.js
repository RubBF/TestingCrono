const fs = require('fs');
const path = require('path');

const RESULTS_DIR = path.join(__dirname, 'test-results');

function cleanOldResults() {
  if (!fs.existsSync(RESULTS_DIR)) {
    console.log(`La carpeta ${RESULTS_DIR} no existe, nada que limpiar.`);
    return;
  }

  const resultFolders = fs.readdirSync(RESULTS_DIR).filter(file =>
    fs.statSync(path.join(RESULTS_DIR, file)).isDirectory()
  );

  if (resultFolders.length <= 3) {
    console.log('Menos de 3 conjuntos de resultados encontrados, no se necesita limpieza.');
    return;
  }

  // Ordenar carpetas por fecha de modificación (de más antiguo a más reciente)
  resultFolders.sort((a, b) => {
    const aTime = fs.statSync(path.join(RESULTS_DIR, a)).mtime.getTime();
    const bTime = fs.statSync(path.join(RESULTS_DIR, b)).mtime.getTime();
    return aTime - bTime;
  });

  // Eliminar carpetas antiguas, dejando solo las 3 más recientes
  const foldersToDelete = resultFolders.slice(0, resultFolders.length - 3);
  foldersToDelete.forEach(folder => {
    const folderPath = path.join(RESULTS_DIR, folder);
    fs.rmSync(folderPath, { recursive: true, force: true });
    console.log(`Eliminado: ${folderPath}`);
  });

  console.log('Limpieza completada. Se mantienen los 3 últimos conjuntos de resultados.');
}

cleanOldResults();
