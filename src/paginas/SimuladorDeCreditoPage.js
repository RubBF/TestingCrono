class SimuladorDeCreditoPage {
    constructor(page) {
      this.page = page;
      this.iframe = this.page.frameLocator('iframe[name="ifr_contenido"]').frame();
      this.rutInput = this.iframe.getByLabel('Rut');
      this.botonConsultar = this.iframe.getByRole('button', { name: 'Consultar' });
      this.montoInput = this.iframe.getByLabel('Monto Solicitado', { exact: true });
      this.formaPagoSelect = this.iframe.getByLabel('Forma Pago Cuotas');
      this.diaPagoLink = this.iframe.getByRole('link', { name: '30' });
      this.botonCalcularCuotas = this.iframe.getByRole('button', { name: 'Calcular Cuotas' });
      this.resultado = this.iframe.locator('#resultado_credito');
      this.opcionCalculo = this.iframe.locator('#gv_calculo_credito_lkb_selecciona_0');
    }
  
    async ingresarRut(rut) {
      await this.rutInput.fill(rut);
    }
  
    async consultarRut() {
      await this.botonConsultar.click();
    }
  
    async ingresarDatosCredito(monto, formaPago) {
      await this.montoInput.fill(monto);
      await this.formaPagoSelect.selectOption(formaPago);
    }
  
    async seleccionarDiaPago() {
      await this.diaPagoLink.click();
    }
  
    async calcularCuotas() {
      await this.botonCalcularCuotas.click();
    }
  
    async seleccionarOpcionCalculo() {
      await this.opcionCalculo.click();
    }
  
    async obtenerResultado() {
      return await this.resultado.textContent();
    }
  }
  
  export default SimuladorDeCreditoPage;
  