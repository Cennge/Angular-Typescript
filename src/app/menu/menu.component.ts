import { Component, Input } from '@angular/core';
import { UserInfoComponent } from '../user-info/user-info.component';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [UserInfoComponent, ThemeToggleComponent, CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  @Input() isDarkTheme: boolean = false;

  toggleTheme(isDark: boolean) {
    this.isDarkTheme = isDark;
  }
}
