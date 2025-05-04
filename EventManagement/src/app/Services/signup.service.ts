import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor(private http: HttpClient) {}
  saveUser(user: any) {
    let url = 'http://localhost:3000/users';
    return this.http.post(url, user);
  }
}
