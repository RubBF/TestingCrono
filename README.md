# CAEP Automation

Este proyecto automatiza el flujo de pruebas del portal CAEP (`https://caep.cronodemo.cl/`), incluyendo el login y el simulador de crédito, utilizando [Playwright](https://playwright.dev/).

## Características
- Login automatizado con validación de versión del aplicativo.
- Simulador de crédito con interacciones avanzadas, incluyendo iframes y selectores dinámicos.
- Limpieza automática de resultados antiguos (solo se conservan los últimos 3 tests).
- Preparado para la ejecución en contenedores.

## Requisitos
- Node.js >= 16
- Playwright instalado globalmente:
  ```bash
  npx playwright install
