import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  @Output() sendflow = new EventEmitter();
  gotosignup() {
    this.sendflow.emit(1);
  }
}
