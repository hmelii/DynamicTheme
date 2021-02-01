import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  primaryColor: string;
  secondaryColor: string;
  themeClass = 'theme--white';

  constructor() {
  }

  changeTheme(theme: string) {
    this.themeClass = `theme--${theme}`;
  }
}
