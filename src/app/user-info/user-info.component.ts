import { Component } from '@angular/core';
import { SocialLinksComponent } from '../social-links/social-links.component';

@Component({
  selector: 'app-user-info',
  imports: [SocialLinksComponent],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css'
})
export class UserInfoComponent {
  fullName: string = 'Ilya Gliba';
  phone: string = '+380 123 456 789';
  email: string = 'ilyagliba02@gmail.com';
  city: string = 'Odessa';
  experience: string = '2 year';
  skills: string = 'programming';
  photo: string = '/ilya.png'
}
