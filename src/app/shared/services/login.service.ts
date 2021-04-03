import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ilogin } from 'src/app/models/ilogin';
import { IUser } from 'src/app/models/user/IUser';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url =' https://petstore.swagger.io/';

  constructor(private http: HttpClient) { }

  signUp(user: IUser): Observable<object> {
   return  this.http.post(this.url, user);
  }

  login(user: Ilogin): Observable<object>{
    return this.http.post(this.url, user);
  }
}
