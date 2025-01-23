class MantenedorTasaInstitucionesPage {
  constructor(page) {
    this.page = page;
    this.iframe = page.frameLocator('iframe[name="ifr_contenido"]');
  }

  async abrirMantenedorTasaInstituciones() {
    // Interactuar con el menú para abrir la funcionalidad
    await this.page.getByText('Administración', { exact: true }).click();
    await this.page.getByText('Mantenedor de Productos').click();
    await this.page.getByRole('link', { name: 'Mantenedor de Tasa (' }).click();
  }

  async completarFormularioTasa({ codigoConvenio, convenioNombre, tasa, tasaPrimerCredito }) {
    // Interactuar con los campos del formulario dentro del iframe
    await this.iframe.getByLabel('Codigo Convenio').click();
    await this.iframe.getByLabel('Codigo Convenio').fill(codigoConvenio);

    await this.iframe.getByLabel('Convenio Nombre').click();
    await this.iframe.getByLabel('Convenio Nombre').fill(convenioNombre);

    await this.iframe.getByLabel('Tasa', { exact: true }).click();
    await this.iframe.getByLabel('Tasa', { exact: true }).fill(tasa);

    await this.iframe.getByLabel('Tasa Primer Crédito').click();
    await this.iframe.getByLabel('Tasa Primer Crédito').fill(tasaPrimerCredito);
  }

  async seleccionarFormaPago() {
    await this.iframe.getByText('Seleccionar Forma Pago').click();
    await this.iframe
      .getByRole('cell', { name: 'Descuento por Planilla (DxP)' })
      .getByRole('checkbox')
      .check();
    await this.iframe.getByTitle('Elija la o las Forma de Pago').locator('a').click();
  }

  async seleccionarInstituciones() {
    await this.iframe.getByText('Seleccionar Instituciones').click();
    await this.iframe
      .getByRole('cell', { name: 'QA PRUEBA' })
      .getByRole('checkbox')
      .check();
    await this.iframe.getByTitle('Elija la o las Instituciones').locator('a').click();
  }
}

export default MantenedorTasaInstitucionesPage;
