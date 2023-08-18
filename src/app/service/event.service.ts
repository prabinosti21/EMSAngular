import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../class/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  url: string = 'http://localhost:8080/events';

  constructor(private http: HttpClient) { }

  getAllEvents(): Observable<Event[]>{
    //@ts-ignore
    return this.http.get<Event[]>(this.url);
  }

  getEventById(id: string): Observable<any>{
    //@ts-ignore
    return this.http.get<any>(this.url.concat('/').concat(id));
  }

  deleteEvent(id: number): Observable<string>{
    //@ts-ignore
    return this.http.delete<string>(this.url.concat('/').concat(id),{responseType:'text'});
  }

  saveEvent(event: any): Observable<any>{
  //@ts-ignore
    return this.http.post<any>(this.url, event , {responseType:'text'});
  }

  updateEvent(eid: any, event: any):Observable<any>{
    //@ts-ignore
    return this.http.put<any>(this.url.concat('/').concat(eid), event ,{responseType:'text'});
  }

  searchEventName(eventName: string):Observable<any>{
    //@ts-ignore
    return this.http.get<any>(this.url.concat('/containing/').concat(eventName));
  }
}
