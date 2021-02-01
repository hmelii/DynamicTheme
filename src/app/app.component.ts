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

  changeTheme() {
    this.themeClass = this.themeClass === 'theme--white' ? 'theme--dark' : 'theme--white';
    console.log(this.themeClass);
  }
}
