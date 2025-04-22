import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() isSidebarOpen: boolean = false;
  @Output() sidebarClosed = new EventEmitter<void>();

  closeSidebar() {
    this.sidebarClosed.emit();
  }
}
