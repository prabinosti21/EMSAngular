import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Equipments } from 'src/app/class/equipments';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.scss']
})
export class EquipmentsComponent implements OnInit {
  
  eventList: Event[] = [];
  equipmentList: Equipments[] = [];
  id!: any;

  constructor(private router : Router, private eventService: EventService, private route: ActivatedRoute){}
  
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('eid');
    console.log(this.id);
    this.eventService.getEventById((this.id)).subscribe((events: any)=>{
      this.eventList = events;
      this.equipmentList = events.equipmentDetails;
      console.log(this.equipmentList);
    })
  }

}
