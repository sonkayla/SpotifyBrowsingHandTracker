import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
  }

  login() { 
    // declare as HTMLElement to call click()
    let button = document.getElementsByClassName("btn btn-dark")[0] as HTMLElement | null; 
    button.click();
  }

  backToHome() {
    let button = document.getElementsByClassName("browse")[0] as HTMLElement | null;
    button.click();
  }
}
