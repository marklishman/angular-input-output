import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ColorBoxComponent } from './color-box.component';
import { ColorValueComponent } from './color-value.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    ColorValueComponent,
    ColorBoxComponent
  ],
  bootstrap:    [
    AppComponent
  ]
})
export class AppModule {}
