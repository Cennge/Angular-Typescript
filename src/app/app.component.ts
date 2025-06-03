import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'forms';

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
       Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    howAreYou: new FormControl('', [
      Validators.pattern('^[A-Za-zА-Яа-я\\s]+$'),
    ]),
  });

  submit() {
    console.log(this.loginForm.value);
    this.loginForm.reset();
  }
}
