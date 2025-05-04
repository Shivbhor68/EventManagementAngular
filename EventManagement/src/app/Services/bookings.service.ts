import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookingsService {
  constructor(private http: HttpClient) {}
  getbooking(id: string) {
    return this.http.get('http://localhost:3000/bookings?userid=' + id);
  }
}
