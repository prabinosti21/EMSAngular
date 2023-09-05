import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../class/review';
import { Likedislikes } from '../class/likedislikes';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  url : string = 'http://localhost:8080/review';
  url1 : string = 'http://localhost:8080/l&d';
  likeDislike : Likedislikes [] = [];

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

  getLikesDislikes():Observable<Likedislikes[]>{
    //@ts-ignore
    return this.http.get<Likedislikes[]>(this.url1);
  }

  updateLikes(id: any): Observable<String>{
    //@ts-ignore
    return this.http.put<any>(this.url1.concat('/likes/').concat(id), this.likeDislike, {responseType: 'text'});
  }

  updateDisLikes(id: any): Observable<String>{
    //@ts-ignore
    return this.http.put<any>(this.url1.concat('/dislikes/').concat(id), this.likeDislike, {responseType: 'text'});
  }

}
