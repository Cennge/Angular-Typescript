import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { VacancyComponent } from './vacancy/vacancy.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, WelcomeComponent, VacancyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'linkedin';
}
