import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAuthToken } from '../../models/auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) { }

  login(data: any): Observable<IAuthToken> {
    return this.http.post<IAuthToken>(`${this.apiUrl}/login`, data);
  }
}
