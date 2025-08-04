import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RATES } from './components/currency-converter/rates';
import { CurrencyConverterComponent } from './components/currency-converter/currency-converter.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { OptionSelectorComponent } from './components/option-selector/option-selector.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CurrencyConverterComponent,
    ReactiveFormsModule,
    OptionSelectorComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  readonly currencies = Object.keys(RATES);
  readonly currency = signal('GBP');

  amount = new FormControl(100);

  refreshData(): void {
    console.log('refreshData');
  }
}
