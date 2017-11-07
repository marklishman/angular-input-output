import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'color-value',
    template: `
        <p>
            {{label}}:
            <input #color
                   type="number" min="0" max="255" step="10"
                   value="{{initValue}}"
                   (input)="sendColor(color.value)"/>
        </p>`,
})
export class ColorValueComponent implements OnInit {
    @Input() label: string;
    @Input() initValue = '0';

    @Output() colorValue: EventEmitter<string> = new EventEmitter();

    ngOnInit() {
        this.sendColor(this.initValue);
    }

    sendColor(color: string): void {
        this.colorValue.emit(color);
    }
}
