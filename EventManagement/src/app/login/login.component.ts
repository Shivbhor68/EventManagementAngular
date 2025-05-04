import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../Services/login.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email = new FormControl();
  password = new FormControl();

  gotosignup() {
    this.routes.navigate(['signup']);
  }
  constructor(private logindetails: LoginService, private routes: Router) {}

  checkCreadential() {
    this.logindetails
      .getdetails(this.email.getRawValue())
      .subscribe((data: any) => {
        if (
          this.email.getRawValue() == data[0].email &&
          this.password.getRawValue() == data[0].password
        ) {
          console.log(
            this.email.getRawValue() +
              data[0].email +
              this.password.getRawValue() +
              data[0].password
          );
          this.logindetails.login(data[0].id);
          this.routes.navigate(['Event']);
        } else {
          console.log(
            this.email.getRawValue() +
              data[0].email +
              this.password.getRawValue() +
              data[0].password
          );
        }
      });
  }
}
