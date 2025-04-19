import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  password: any;
  email: any;

  constructor(private toastr: ToastrService, private router: Router) {}
  login() {
    const storedUsers = JSON.parse(localStorage.getItem('formdata') || '[]');

    const matchedUser = storedUsers.find(
      (user: any) =>
        user.email === this.email && user.password === this.password
    );

    if (matchedUser) {
      this.toastr.success('Login successful!', 'Success');
      this.router.navigate(['/dashboard']);
    } else {
      this.toastr.error('Login Failed.', 'Error');
    }
  }

  register() {
    alert('Redirecting to registration...');
  }

  forgotPassword() {
    alert('Redirecting to password recovery...');
  }
}
