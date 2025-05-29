import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.css']
})
export class ThemeToggleComponent {
  isDarkTheme: boolean = false;

  @Output() themeChanged = new EventEmitter<boolean>(); 

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    document.body.classList.toggle('dark-theme', this.isDarkTheme);
    this.themeChanged.emit(this.isDarkTheme); 
  }
}
