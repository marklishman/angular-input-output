import { Component } from '@angular/core';
import { RedGreenBlue } from './red-green-blue';

@Component({
  selector: 'app-root',
  template: `
        <app-color-value label="Red"   initValue="10"  (value)="color.red=$event"></app-color-value>
        <app-color-value label="Green" initValue="200" (value)="color.green=$event"></app-color-value>
        <app-color-value label="Blue"  initValue="140" (value)="color.blue=$event"></app-color-value>
        <app-color-box [rgb]="color"></app-color-box>`,
})
export class AppComponent {
  color: RedGreenBlue = new RedGreenBlue();
}
