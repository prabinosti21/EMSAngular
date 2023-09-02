import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../class/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  url : string = 'http://localhost:8080/review'

  constructor(private http: HttpClient) { }

  getComments():Observable<Review[]>{
    //@ts-ignore
    return this.http.get<Review[]>(this.url.concat('/comment'));
  }

  postComments(review: Review): Observable<any>{
    //@ts-ignore
    return this.http.post<any>((this.url.concat('/comment')), review, {responseType: 'text'});
  }

  deleteComments(id: number): Observable<String>{
    //@ts-ignore
    return this.http.delete<string>(this.url.concat('/').concat(String(id)), {responseType: 'text'});
  }

  getLikes():Observable<Review[]>{
    //@ts-ignore
    return this.http.get<Review[]>(this.url.concat('/like'));
  }
}
