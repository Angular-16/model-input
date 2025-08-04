import { CommonModule } from '@angular/common';
import { Component, input, model } from '@angular/core';

@Component({
  selector: 'app-option-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './option-selector.component.html',
  styleUrl: './option-selector.component.scss',
})
export class OptionSelectorComponent {
  options = input.required<string[]>();
  selected = model.required<string>();
}
