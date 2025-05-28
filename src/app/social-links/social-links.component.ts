import { Component } from '@angular/core';

@Component({
  selector: 'app-social-links',
  imports: [],
  templateUrl: './social-links.component.html',
  styleUrl: './social-links.component.css'
})
export class SocialLinksComponent {
  github: string = 'https://github.com/Cennge';
  linkedin: string = 'https://linkedin.com/in/cennge';
  twitter: string = 'https://twitter.com/cennge';
  certifications: string = 'https://google.com';
}
