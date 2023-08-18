import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from 'src/app/class/event';
import { Guest } from 'src/app/class/guest';
import { EventDetailsService } from 'src/app/service/event-details.service';
import { EventService } from 'src/app/service/event.service';
import { EventComponent } from '../event/event.component';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.scss']
})
export class GuestComponent implements OnInit {
  
  eventList: Event[] = [];
  guestList: Guest[] = [];
  id!: any;

  constructor(private router : Router, private eventService: EventService, private route: ActivatedRoute){}
  
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('eid');
    console.log(this.id);
    this.eventService.getEventById((this.id)).subscribe((events: any)=>{
      this.eventList = events;
      this.guestList = events.guestDetails;
      console.log(this.eventList);
    })
  }
}
