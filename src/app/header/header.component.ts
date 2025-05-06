import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  id: string | null = null;

  isloggedin: boolean = false;
  constructor(private login: LoginService, private route: Router) {}
  ngOnInit() {
    this.login.isLoggedIn$.subscribe((status) => {
      this.isloggedin = status;
    });
  }
  logout() {
    this.login.logout();
    this.isloggedin = false;
    this.route.navigate(['Event']);
  }
}
