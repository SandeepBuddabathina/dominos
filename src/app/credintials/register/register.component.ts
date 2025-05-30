import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  register() {
    if (this.registerForm.invalid) {
      this.toastr.error('Fill all the fields correctly!');
      return;
    }

    const { email, mobile, password, confirmPassword, name } = this.registerForm.value;

    if (password !== confirmPassword) {
      this.toastr.error('Passwords do not match!');
      return;
    }

    const userData = {
      name,
      email,
      mobile,
      password // you can encode here if needed
    };

    const existingUsers = JSON.parse(localStorage.getItem('formdata') || '[]');
    const isAlreadyRegistered = existingUsers.some((user: any) => user.email === email);

    if (isAlreadyRegistered) {
      this.toastr.error('User already registered!');
      return;
    }

    existingUsers.push(userData);
    localStorage.setItem('formdata', JSON.stringify(existingUsers));

    // Console log masked values for reference
    console.log('Masked Email:', this.maskEmail(email));
    console.log('Masked Mobile:', this.maskMobile(mobile));
    console.log('Masked Password:', this.maskPassword(password));

    this.toastr.success('🍕 Registered Successfully!');
    this.registerForm.reset();

    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 1500);
  }

  // Masking Functions
  maskEmail(email: string): string {
    const [user, domain] = email.split('@');
    const maskedUser = user[0] + '***' + user.slice(-1);
    return `${maskedUser}@${domain}`;
  }

  maskMobile(mobile: string): string {
    return mobile.replace(/(\d{2})\d{6}(\d{2})/, '$1******$2');
  }

  maskPassword(password: string): string {
    return '*'.repeat(password.length);
  }
}
