import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Event } from 'src/app/class/event';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  eventList: Event[] = [];
  eid: any;
  searchValue!:string;

  
  constructor(private eventService: EventService, private router : Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.getAllEvent();
  }


  getAllEvent():void{
    this.eventService.getAllEvents().subscribe((events: any)=>{
      this.eventList = events;
      console.log(events);
    })
  }

  deleteEvent(eventId: number):void{
    console.log("Delete button clicked");
    this.eventService.deleteEvent(eventId).subscribe((message: string)=>{
      alert(message);
      this.getAllEvent();
    })
  }

  searchEventName():void{
    this.eventService.searchEventName(this.searchValue).subscribe((events:any)=>{
      this.eventList = events;
    })
  }
}
