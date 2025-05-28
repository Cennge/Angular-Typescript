import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserInfoComponent } from './user-info/user-info.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'resume';
}
