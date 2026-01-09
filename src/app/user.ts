import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'https://lg0w5w01-4000.inc1.devtunnels.ms/api';

  constructor(private http: HttpClient) { }

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

  getUsers(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/complaint-register-form2`);
  }

  // ⭐ UPDATE STATUS – FIXED URL WITH ID
  updateStatus(id: number, body: any): Observable<any> {
    return this.http.put<any>(
      `${this.baseUrl}/complaint-register-form2/update-status/${id}`,
      body
    );
  }

  // ⭐⭐ NEW API → complaint-status?mobileNumber=xxxx
  getComplaintStatus(mobileNumber: string): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}/complaint-status?mobileNumber=${mobileNumber}`
    );
  }

}
