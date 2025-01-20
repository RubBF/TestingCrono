class LoginPage {
    constructor(page) {
      this.page = page;
      this.usuarioInput = this.page.getByPlaceholder('Usuario');
      this.contrasenaInput = this.page.getByPlaceholder('Contraseña');
      this.botonLogin = this.page.getByRole('button', { name: 'Iniciar sesión' });
    }
  
    async navegar(url) {
      await this.page.goto(url);
    }
  
    async iniciarSesion(usuario, contrasena) {
      await this.usuarioInput.fill(usuario);
      await this.contrasenaInput.fill(contrasena);
      await this.botonLogin.click();
      await this.page.waitForURL(/dashboard/); // Cambiar si es necesario
    }
  }
  
  export default LoginPage;
  