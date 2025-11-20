import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'https://lg0w5w01-4000.inc1.devtunnels.ms/api';

  constructor(private http: HttpClient) {}

  // GET Departments
  getDepartments(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/departments`);
  }

  // GET Districts
  getDistricts(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/districts`);
  }

  
  // GET Zones
  getZones(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/zones`);
  }

  // ⭐ POST Form Submit
  submitForm(data: FormData): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/formsubmit`, data);
  }
}
