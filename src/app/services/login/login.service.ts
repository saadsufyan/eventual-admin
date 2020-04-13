import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  token;
  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token');
   }

  loginUser(body) {
      return this.http.post(`${environment.baseUrl}/admin/login`, body, {
        headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      })
      }
      );
  }
  verifyLogin(body) {
    return this.http.post(`${environment.baseUrl}/admin/verify_admin_password`, body, {
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': this.token
        }
    });
  }
}
