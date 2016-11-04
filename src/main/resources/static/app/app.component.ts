import { Component } from '@angular/core';

@Component({
  selector: 'iHolop',
  template: `
      <h1 class="center-block">{{title}}</h1>
      <router-outlet></router-outlet>
  `

})
export class AppComponent {
  title = 'iHolop';
}
