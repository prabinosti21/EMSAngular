import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit{

  constructor(private router: Router, private route: ActivatedRoute){}

  eid: any;

  ngOnInit(): void {
    this.eid = this.route.snapshot.paramMap.get('eid');
  }
}
