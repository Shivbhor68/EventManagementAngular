import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}
  updateDetails(user: any, userid: string) {
    return this.http.put('http://localhost:3000/users/' + userid, user);
  }
}
