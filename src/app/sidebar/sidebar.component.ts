import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() isSidebarOpen: boolean = false;
  @Output() sidebarClosed = new EventEmitter<void>();

  name: string = '';
  phone: string = '';

  ngOnInit() {
    this.loadUser();
  }

  loadUser() {
    const userStr = localStorage.getItem('loggedInUser');
    if (userStr) {
      const user = JSON.parse(userStr);
      this.name = user.name || 'User Name';
      this.phone = user.mobile || '';
    }
  }

  closeSidebar() {
    this.sidebarClosed.emit();
  }
}
