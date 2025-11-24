import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'https://lg0w5w01-4000.inc1.devtunnels.ms/api';
// private baseUrl ='https://jsonplaceholder.typicode.com/;'


  constructor(private http: HttpClient) {}

  getDepartments(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/departments`);
  }

  getDistricts(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/districts`);
  }

  getZones(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/zones`);
  }

  submitForm(data: FormData): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/complaint-register-form1`, data);
  }

  // ⭐ GET Table Data
  getUsers(): Observable<any> {
   return this.http.get<any>(`${this.baseUrl}/complaint-register-form2`);

  }

}
