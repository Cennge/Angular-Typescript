import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-description',
  imports: [],
  templateUrl: './button-description.component.html',
  styleUrl: './button-description.component.css',
})
export class ButtonDescriptionComponent {
  @Input() buttonText: string = '';
}
  