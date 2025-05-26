import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-upper-part-container',
  imports: [LogoComponent, NavbarComponent],
  templateUrl: './upper-part-container.component.html',
  styleUrl: './upper-part-container.component.css'
})
export class UpperPartContainerComponent {

}
