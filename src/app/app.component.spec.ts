import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ColorValueComponent } from './color-value.component';
import { ColorBoxComponent } from './color-box.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ColorValueComponent,
        ColorBoxComponent
      ],
    }).compileComponents();
  }));

  it(`should have a color object`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.color).not.toBeNull();
  }));

});
