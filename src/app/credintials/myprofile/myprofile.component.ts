import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  name: string = '';
  phone: string = '';
  email: string = '';
  initials: string = '';

  editingPhone = false;
  editingEmail = false;
  
  constructor(private router: Router, private location: Location) {}

  goBack() {
    this.location.back();
  }

  ngOnInit() {
    this.loadUser();
  }

  loadUser() {
    const userStr = localStorage.getItem('loggedInUser');
    if (userStr) {
      const user = JSON.parse(userStr);
      this.name = user.name || 'User Name';
      this.phone = user.mobile || '';
      this.email = user.email || '';
      this.initials = this.name.charAt(0).toUpperCase();
    } else {
      this.router.navigate(['/login']);
    }
  }

  savePhone() {
    this.editingPhone = false;
    this.updateUser('mobile', this.phone);
  }

  saveEmail() {
    this.editingEmail = false;
    this.updateUser('email', this.email);
  }

  updateUser(field: string, value: string) {
    const userStr = localStorage.getItem('loggedInUser');
    if (userStr) {
      const user = JSON.parse(userStr);
      const oldEmail = user.email; // keep old email before updating
      user[field] = value;
      localStorage.setItem('loggedInUser', JSON.stringify(user));

      // also update in formdata
      const storedUsers = JSON.parse(localStorage.getItem('formdata') || '[]');
      const index = storedUsers.findIndex((u: any) => u.email === oldEmail);
      if (index !== -1) {
        storedUsers[index][field] = value;
        localStorage.setItem('formdata', JSON.stringify(storedUsers));
      }
    }
  }

  logout() {
    localStorage.removeItem('loggedInUser');
    this.router.navigate(['/login']);
  }
}