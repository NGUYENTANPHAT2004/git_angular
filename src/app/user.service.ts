import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interface/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_URL = 'http://localhost:3000'
  constructor(private http : HttpClient) { }
  RegisterUser = (data:User):Observable<any>=>{
    return this.http.post(this.API_URL+'/register', data)
  }
  UserLogin = (data:User):Observable<any>=>{
    return this.http.post(this.API_URL+'/login',data)
  }
}
