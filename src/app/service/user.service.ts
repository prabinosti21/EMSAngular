import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../class/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url:string = 'http://localhost:8080/user';

  constructor(private http: HttpClient) { }

  login(user: User):Observable<any>{
    //@ts-ignore
    return this.http.post<any>(this.url.concat('/login'),user,{responseType: 'text'});
  }

  register(user: User): Observable<any>{
    //@ts-ignore
    return this.http.post<any>(this.url.concat('/register'),user,{responseType:'text'});
  }

  checkEmail(email: any): Observable<any>{
    //@ts-ignore
    return this.http.get<any>(this.url.concat('/forget/').concat(email),{responseType: 'text'});
  }

  setPassword(user: User): Observable<any>{
    //@ts-ignore
    return this.http.post<any>(this.url.concat('/reset'),user,{responseType: 'text'});
  }
}
