import { Component, ViewEncapsulation, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styles: [
    `
     .testclass {color: green; }
  `,
  ],
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
}
