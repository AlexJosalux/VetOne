import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth-service'; // Asegúrate que el nombre coincida (AuthService o AuthServices)
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email: string = '';
  password: string = '';

  private servicioAuth = inject(AuthService);
  private router = inject(Router);

  // 1. Agregamos "async" para poder usar "await"
  async iniciarSesion() {
    // 2. Corregimos la lógica: que no falte NINGUNO (usando ||)
    if (!this.email || !this.password) {
      alert("Por favor, ingresa correo y contraseña");
      return;
    }

    try {
      // 3. Usamos "await" para esperar la respuesta de Firebase
      await this.servicioAuth.login(this.email, this.password);
      
      // 4. Si los datos son correctos, se ejecutan estas líneas:
      alert("¡Bienvenido a VetOne!");
      this.router.navigate(['/usuarios']);

    } catch (error: any) {
      // 5. Si los datos son incorrectos, cae aquí:
      console.error("Error de login:", error.code);
      alert("Acceso denegado: Usuario o contraseña incorrectos");
    }
  } 
}