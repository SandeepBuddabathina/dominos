import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private toastr: ToastrService, private router: Router) {}

  login() {
    const storedUsers = JSON.parse(localStorage.getItem('formdata') || '[]');

    const matchedUser = storedUsers.find(
      (user: any) =>
        user.email === this.email && user.password === this.password
    );

    if (matchedUser) {
      this.toastr.success('🍕 Login successful!');
      this.router.navigate(['/header']);
    } else {
      this.toastr.error('Invalid credentials or not registered. Please register first!');
    }
  }

  register() {
    this.router.navigate(['/register']);
  }

  forgotPassword() {
    this.toastr.info('Redirecting to password recovery...');
    this.router.navigate(['/forgotPassword']);
  }
}
