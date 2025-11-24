import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

export interface LoginResponse {
  accessToken: string;   // must match your backend response field
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://lg0w5w01-4000.inc1.devtunnels.ms/api/auth/login';
  private tokenKey = 'auth_token';

  constructor(private http: HttpClient) {}

  // LOGIN
  login(username: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.apiUrl, { username, password }).pipe(
      tap(res => {
        if (res && res.accessToken) {
          localStorage.setItem(this.tokenKey, res.accessToken);
        }
      })
    );
  }

  // GET TOKEN
  getToken(): string {
    return localStorage.getItem(this.tokenKey) || '';
  }

  // LOGOUT
  logout() {
    localStorage.removeItem(this.tokenKey);
  }

  // CHECK LOGIN STATUS
  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }
}
