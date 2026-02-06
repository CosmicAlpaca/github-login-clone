import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoading = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.isLoading = true;
      // Giả lập API call
      setTimeout(() => {
        console.log('Login Success:', this.loginForm.value);
        this.isLoading = false;
        // Chuyển hướng sang Dashboard
        this.router.navigate(['/dashboard']);
      }, 1000);
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  onSocialLogin(provider: string): void {
    alert(`Mô phỏng login với ${provider}`);
  }

  onNavigate(event: Event): void {
    event.preventDefault();
  }
}
