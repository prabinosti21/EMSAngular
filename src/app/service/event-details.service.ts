import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Guest } from '../class/guest';
import { Equipments } from '../class/equipments';
import { Foods } from '../class/foods';

@Injectable({
  providedIn: 'root'
})
export class EventDetailsService {

  guestUrl: string ='http://localhost:8080/guest';
  equipmentUrl: string = 'http://localhost:8080/equipments';
  foodUrl: string = 'http://localhost:8080/f&d';

  constructor(private http: HttpClient) { }

  getGuestInfo(): Observable<Guest[]>{
    //@ts-ignore
    return this.http.get<any>(this.guestUrl);
  }

  getEquipmentInfo(): Observable<Equipments[]>{
    //@ts-ignore
    return this.http.get<any>(this.equipmentUrl);
  }

  getFoodInfo():Observable<Foods[]>{
    //@ts-ignore
    return this.http.get<any>(this.foodUrl);
  }
}
