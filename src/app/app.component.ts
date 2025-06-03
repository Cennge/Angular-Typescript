import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { VacancyComponent } from './vacancy/vacancy.component';
import { FooterComponent } from './footer/footer.component';
import { DiscoverComponent } from './discover/discover.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, WelcomeComponent, VacancyComponent, FooterComponent, DiscoverComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'linkedin';
}
