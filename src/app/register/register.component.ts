import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private toastr: ToastrService) {
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
      this.toastr.error('Fill all the fields correctly, mawa!');
      return;
    }

    const { email, mobile, password, confirmPassword, ...rest } = this.registerForm.value;

    if (password !== confirmPassword) {
      this.toastr.error('Passwords do not match, mawa!');
      return;
    }

    const maskedEmail = this.maskEmail(email);
    const maskedMobile = this.maskMobile(mobile);

    const userData = {
      ...rest,
      email: maskedEmail,
      mobile: maskedMobile
    };

    localStorage.setItem('dominos_user', JSON.stringify(userData));
    this.toastr.success('🍕 Registered Successfully, mawa!');
    this.registerForm.reset();
  }

  maskEmail(email: string): string {
    const [name, domain] = email.split('@');
    const visible = name.slice(0, 2);
    const masked = '*'.repeat(name.length - 2);
    return `${visible}${masked}@${domain}`;
  }

  maskMobile(mobile: string): string {
    return mobile.slice(0, 2) + '******' + mobile.slice(-2);
  }

  restrictMobileInput(event: KeyboardEvent): boolean {
    const allowed = /^[0-9]$/;
    return allowed.test(event.key);
  }
}
