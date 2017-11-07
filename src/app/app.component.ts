import { Component } from '@angular/core';

import { RedGreenBlue } from './red-green-blue';

@Component({
  selector: 'color-app',
  template: `
        <color-value label="Red"   initValue="10"  (colorValue)="color.red=$event"></color-value>
        <color-value label="Green" initValue="200" (colorValue)="color.green=$event"></color-value>
        <color-value label="Blue"  initValue="140" (colorValue)="color.blue=$event"></color-value>
        <color-box [rgb]="color"></color-box>`,
})
export class AppComponent {
  color: RedGreenBlue = new RedGreenBlue();
}
