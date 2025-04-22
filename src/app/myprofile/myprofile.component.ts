import { Component } from '@angular/core';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent {
  phone: string = '6305552499';
  email: string = '6305552499@example.com';

  editingPhone = false;
  editingEmail = false;

  savePhone() {
    this.editingPhone = false;
    // Call service to save if needed
  }

  saveEmail() {
    this.editingEmail = false;
    // Call service to save if needed
  }
}