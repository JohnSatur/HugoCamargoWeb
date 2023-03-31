import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @HostBinding('class.show-menu') showMenu: boolean = false;

  toggleNavbar(): void {
    this.showMenu = !this.showMenu;
  }
}
