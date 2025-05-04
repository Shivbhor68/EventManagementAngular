import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from '../Services/signup.service';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  confirm = new FormControl();
  constructor(private route: Router, private signup: SignupService) {}
  Signupform = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
  });
  onsubmit() {
    if (
      this.confirm.value == this.Signupform.value.password &&
      this.Signupform.value.name != null
    ) {
      this.signup.saveUser(this.Signupform.value).subscribe((data: any) => {
        this.route.navigate(['Event']);
      });
    } else {
      console.log(this.confirm.value);
    }
  }
  gotologgin() {
    this.route.navigate(['login']);
  }
}
