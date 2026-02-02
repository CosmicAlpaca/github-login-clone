import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // 1. Xử lý Form Submit (Nút Sign in)
  onSubmit(): void {
    if (this.loginForm.valid) {
      this.isLoading = true;

      // Mô phỏng độ trễ của API
      setTimeout(() => {
        console.group('🔐 Authentication Attempt');
        console.log('Timestamp:', new Date().toISOString());
        console.log('Payload:', this.loginForm.value);
        console.log('Status: Valid input, sending to backend (mock)...');
        console.groupEnd();

        this.isLoading = false;
        alert('Đăng nhập thành công (Mô phỏng)! Kiểm tra Console để xem dữ liệu.');
      }, 1000);
    } else {
      this.loginForm.markAllAsTouched(); // Hiển thị lỗi nếu người dùng cố ấn submit
      console.warn('⚠️ Form không hợp lệ, vui lòng kiểm tra lại.');
    }
  }

  // 2. Xử lý Social Login (Google / Apple)
  onSocialLogin(provider: 'Google' | 'Apple'): void {
    console.group(`🌐 ${provider} Login`);
    console.log(`Action: Initiating OAuth2 flow with ${provider}`);
    console.log('Redirect URI: https://github.com/login/oauth/callback');
    console.groupEnd();

    alert(`Đang chuyển hướng đến ${provider}... (Chức năng mô phỏng)`);
  }

  // 3. Xử lý các liên kết điều hướng (Forgot pass, Create account, Footer)
  onNavigate(destination: string, event: Event): void {
    event.preventDefault(); // Ngăn chặn reload trang mặc định của thẻ <a>

    console.group('🔗 Navigation Event');
    console.log('Target Destination:', destination);
    console.log('Action: Routing to page...');
    console.groupEnd();

  }

  // 4. Xử lý Sign in with Passkey
  onPasskeyLogin(event: Event): void {
    event.preventDefault();
    console.log(' Passkey: Checking device compatibility and prompting biometric auth...');
  }
}
