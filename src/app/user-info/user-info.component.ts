import { Component } from '@angular/core';
import { SocialLinksComponent } from '../social-links/social-links.component';
import { CommonModule } from '@angular/common';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-user-info',
  imports: [SocialLinksComponent, CommonModule, ThemeToggleComponent],
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {
  fullName: string = 'Ilya Gliba';
  phone: string = '+380 055 4321';
  email: string = 'ilyagliba02@gmail.com';
  city: string = 'Odessa';
  experience: string = '2 year';
  skills: string = 'programming';
  photo: string = '/ilya.png'

  isDarkTheme: boolean = false;
  currentDate: Date = new Date();

  toggleTheme(isDark: boolean) {
    this.isDarkTheme = isDark;
  } 
}
