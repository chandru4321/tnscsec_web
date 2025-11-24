import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../app/auth';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="login-container">
      <div class="login-card">

        <h2 class="title">Welcome Back</h2>
        <p class="subtitle">Login to continue</p>

        <form [formGroup]="form" (ngSubmit)="onSubmit()">

          <div class="input-group">
            <input type="text" formControlName="username" placeholder="username">
          </div>

          <div class="input-group">
            <input type="password" formControlName="password" placeholder="Password">
          </div>

          <button class="login-btn" type="submit">Login</button>
        </form>

        <p *ngIf="error" class="error">{{ error }}</p>

      </div>
    </div>
  `
})
export class LoginComponent {

  form!: FormGroup;
  error: string | null = null;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.form = this.fb.group({
      username: [''],
      password: ['']
    });
  }

  onSubmit() {
  const { username, password } = this.form.value;

  this.auth.login(username, password).subscribe({
    next: (res) => {
      console.log("LOGIN SUCCESS", res);
      this.router.navigate(['/admin']);
    },
    error: (err) => {
      console.error(err);
      this.error = "Invalid Credentials";
    }
  });
}

}
