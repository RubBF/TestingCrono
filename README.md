# Proyecto: Automatización Web con Playwright

Este proyecto se enfoca en la automatización de pruebas para la plataforma web **caep.cronodemo.cl**, que incluye interacción con **iframes**, menús, y diversos elementos de la página. El objetivo principal es validar funcionalidades clave, mejorar la estabilidad del portal y asegurar la calidad del producto mediante pruebas automatizadas.

---

## Tecnologías Utilizadas
- **JavaScript**: Lenguaje principal para el desarrollo del proyecto.
- **Playwright**: Framework para la automatización de pruebas de interfaz.
- **Node.js**: Entorno de ejecución para JavaScript.
- **Git**: Control de versiones y gestión de ramas.
- **GitHub**: Repositorio remoto para el almacenamiento del proyecto.

---

## Características Principales
1. **Automatización de Iframes**:
   - Validación de formularios dentro de iframes.
   - Extracción y manipulación de datos en iframes anidados.

2. **Interacción con menús**:
   - Navegación por menús desplegables.
   - Manejo de eventos complejos para probar la navegación.

3. **Validación de Elementos**:
   - Verificación de disponibilidad y tiempos de respuesta de botones, inputs y otros elementos interactivos.

4. **Flujos de Prueba**:
   - Desarrollo de casos de prueba para login y simulador de crédito.
   - Integración futura de nuevos pasos al flujo.

---

## Estructura del Proyecto

```plaintext
.
├── src
│   ├── tests             # Scripts de prueba automatizada
│   ├── utils             # Funciones reutilizables y configuraciones
│   └── pages             # Page Objects para cada sección de la web
├── .gitignore            # Archivos y carpetas a ignorar en Git
├── package.json          # Configuración y dependencias del proyecto
├── README.md             # Documentación del proyecto
└── playwright.config.js  # Configuración principal de Playwright
```

---

## Requisitos Previos

1. Tener instalado [Node.js](https://nodejs.org/).
2. Instalar Playwright ejecutando:
   ```bash
   npm install playwright
   ```
3. Clonar el repositorio:
   ```bash
   git clone https://github.com/usuario/proyecto-playwright.git
   ```

---

## Configuración Inicial

1. Instalar las dependencias del proyecto:
   ```bash
   npm install
   ```
2. Configurar `playwright.config.js` con la URL base del portal:
   ```javascript
   use: {
       baseURL: 'https://caep.cronodemo.cl'
   }
   ```
3. Ejecutar las pruebas iniciales para verificar la configuración:
   ```bash
   npx playwright test
   ```

---

## Comandos Utiles

- Ejecutar todas las pruebas:
  ```bash
  npx playwright test
  ```

- Ejecutar una prueba específica:
  ```bash
  npx playwright test nombre-del-test.spec.js
  ```

- Generar un reporte de las pruebas:
  ```bash
  npx playwright show-report
  ```

---

## Buenas Prácticas

- **Uso de ramas**: Crea una rama por cada funcionalidad o fix utilizando:
  ```bash
  git checkout -b nombre-de-la-rama
  ```

- **Mensajes de commit claros**: Usa mensajes descriptivos para facilitar el historial:
  ```bash
  git commit -m "feat: agregar validación en iframe"
  ```

- **Revisiones de código**: Realiza pull requests en GitHub para revisar los cambios antes de fusionarlos con la rama principal.

---

## Futuras Mejores

1. Integrar CI/CD para ejecutar pruebas automáticamente con cada cambio.
2. Generar reportes más detallados con herramientas como Allure o Playwright Trace Viewer.
3. Extender el soporte para navegadores adicionales como Safari y Edge.

---

## Contribuciones

Si deseas colaborar en el proyecto:
1. Haz un fork del repositorio.
2. Trabaja en tu propia rama.
3. Crea un Pull Request para proponer los cambios.

---

## Contacto

Para más información o reportar problemas, contáctanos a:
- **Correo**: soporte@cronodemo.cl
- **GitHub Issues**: [Abrir Issue](https://github.com/usuario/proyecto-playwright/issues)

---

**© 2025 - Proyecto Automatización Web**

