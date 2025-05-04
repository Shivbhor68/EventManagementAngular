import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  getdetails(username: string) {
    const url = 'http://localhost:3000/users';
    let com = '?email=' + username;
    return this.http.get(url + com);
  }
  private loggedIn = new BehaviorSubject<boolean>(false);
  private currentUser = new BehaviorSubject<string | null>(null);
  isLoggedIn$ = this.loggedIn.asObservable();
  currentUser$ = this.currentUser.asObservable();

  login(username: string) {
    this.loggedIn.next(true);
    this.currentUser.next(username);
  }

  logout() {
    this.loggedIn.next(false);
    this.currentUser.next(null);
  }
  getUsername(): string | null {
    return this.currentUser.value;
  }
  getdataProfile() {
    const url = 'http://localhost:3000/users/';

    return this.http.get(url + this.currentUser.value);
  }
}
