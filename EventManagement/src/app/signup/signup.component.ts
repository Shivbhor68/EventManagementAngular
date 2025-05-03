import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-signup',
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  @Output() sendflow = new EventEmitter();

  gotosignin() {
    this.sendflow.emit(0);
  }
}
