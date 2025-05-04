import { Component } from '@angular/core';
import { BookingsService } from '../Services/bookings.service';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-mybooking',
  imports: [],
  templateUrl: './mybooking.component.html',
  styleUrl: './mybooking.component.css',
})
export class MybookingComponent {
  isloggedin: boolean = false;
  currentUser: string = '';
  bookings: any;
  constructor(private booking: BookingsService, private login: LoginService) {}
  ngOnInit() {
    this.login.isLoggedIn$.subscribe((status) => {
      this.isloggedin = status;
    });
    this.login.currentUser$.subscribe((id: any) => {
      this.currentUser = id;
    });
    if (this.isloggedin) {
      this.booking.getbooking(this.currentUser).subscribe((data: any) => {
        this.bookings = data;
      });
    }
  }
}
