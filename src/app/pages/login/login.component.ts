import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  standalone: false,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public errorMessage!: string;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    console.log('LoginComponent - Constructor iniciado');

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });

    console.log('LoginComponent - Formulário criado', this.loginForm);
  }

  ngOnInit(): void {
    console.log('LoginComponent - ngOnInit executado');
  }

  onSubmit() {
    console.log('LoginComponent - onSubmit chamado');

    if (this.loginForm.valid) {
      console.log('LoginComponent - Formulário válido', this.loginForm.value);

      const { email, password } = this.loginForm.value;
      console.log('LoginComponent - Dados extraídos:', { email, password });

      this.auth.login({ email, password }).subscribe({
        next: (res) => {
          console.log('LoginComponent - Login bem-sucedido', res);

          localStorage.setItem('authToken', res.token);
          console.log('LoginComponent - Token armazenado no localStorage');

          this.router.navigate(['/home']);
          console.log('LoginComponent - Navegando para /home');
        },
        error: (err) => {
          console.log('LoginComponent - Erro no login:', err);
          this.errorMessage = 'Login inválido.';
        },
      });
    } else {
      console.log(
        'LoginComponent - Formulário inválido',
        this.loginForm.errors
      );
    }
  }
}
