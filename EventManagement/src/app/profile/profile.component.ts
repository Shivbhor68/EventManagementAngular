import { Component } from '@angular/core';
import { LoginService } from '../Services/login.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProfileService } from '../Services/profile.service';

@Component({
  selector: 'app-profile',
  imports: [ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  role = '';
  dbname = '';
  id = '';
  isloggedin: boolean = false;
  password = '';
  constructor(private login: LoginService, private profile: ProfileService) {}

  ngOnInit() {
    this.login.isLoggedIn$.subscribe((status) => {
      this.isloggedin = status;
    });
    if (this.isloggedin) {
      this.login.getdataProfile().subscribe((data: any) => {
        this.dbname = data.name;
        this.role = data.userRole;
        this.id = data.id;
        this.password = data.password;

        this.profileForm.patchValue({
          id: this.id,
          password: this.password,
          userRole: this.role,
          name: data.name,
          email: data.email,
          address: data.address,
          mobile: data.mobile,
          preferedeventtype: data.preferedeventtype,
        });
      });
    }
  }
  profileForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    email: new FormControl(),
    address: new FormControl(),
    mobile: new FormControl(),
    password: new FormControl(),
    userRole: new FormControl(),
    preferedeventtype: new FormControl(),
  });
  update() {
    this.profile
      .updateDetails(this.profileForm.value, this.id)
      .subscribe((data: any) => {
        console.log(data);
      });

    console.log(this.profileForm.value);
  }
}
