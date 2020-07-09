import { Component } from '@angular/core';
import { Router} from '@angular/router';
//import{}app.component.tsJavaScript
//import { Component } from '@angular/core';
declare const DisplayMessage: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'edutechapp';
  constructor(public router:Router) {}
  onClick() {
    DisplayMessage();
  }
}
