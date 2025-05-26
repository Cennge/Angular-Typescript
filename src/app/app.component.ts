import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UpperPartContainerComponent } from './upper-part-container/upper-part-container.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UpperPartContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-task';
}
