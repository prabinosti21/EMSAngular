import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Foods } from 'src/app/class/foods';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {

  eventList: Event[] = [];
  foodList: Foods[] = [];
  id!: any;

  constructor(private router : Router, private eventService: EventService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('eid');
    console.log(this.id);
    this.eventService.getEventById((this.id)).subscribe((events: any)=>{
      this.eventList = events;
      this.foodList = events.foodDetails;
      console.log(this.foodList);
    })
  }

}
