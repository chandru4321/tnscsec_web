import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private apiUrl = 'https://jk901cnt-5000.inc1.devtunnels.ms/api/auth/login';
  private tokenKey = 'authToken';

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<any>(this.apiUrl, { username, password }).pipe(
      tap(res => {
        console.log("LOGIN RESPONSE =", res);

        const token = res?.data?.accessToken;  // <-- correct key ✔✔✔

        if (token) {
          localStorage.setItem(this.tokenKey, token);
          console.log("TOKEN SAVED =", token);
        } else {
          console.error("TOKEN NOT RECEIVED FROM API");
        }
      })
    );
  }

  getToken() {
    return localStorage.getItem(this.tokenKey);
  }
}
