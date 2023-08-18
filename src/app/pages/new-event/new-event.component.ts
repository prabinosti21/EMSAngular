import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.scss']
})
export class NewEventComponent implements OnInit, OnDestroy {
  
  eventData !: any;
  eventForm !: FormGroup;
  eid: any;
  
  constructor(private formBuilder : FormBuilder, private eventService: EventService, private router : Router, private route: ActivatedRoute){}
  
  ngOnInit(): void {
    {this.eventForm = this.formBuilder.group({
      eventName: ['',Validators.required],
      eventOrganizerName: ['',Validators.required],
      eventVenue:['',Validators.required],
      eventDate:['',Validators.required],
      eventOrganizerPhone: ['',Validators.required],
      eventOrganizerAddress: ['',Validators.required],
      guestDetails: this.formBuilder.array([]),
      foodDetails: this.formBuilder.array([]),
      equipmentDetails: this.formBuilder.array([])
    })}

  }

  ngOnDestroy(): void {

  }

  guestDetails():FormArray{
    return this.eventForm.get('guestDetails') as FormArray;
  }

  newGuest():FormGroup{
    return this.formBuilder.group({
      fullName: ['',Validators.required],
      gender: ['',Validators.required],
      phone: ['',Validators.required],
      email: ['',Validators.required]
    })
  }

  addGuest(){
    this.guestDetails().push(this.newGuest());
  }

  removeGuest(i: number){
    this.guestDetails().removeAt(i);
  }

  foodDetails():FormArray{
    return this.eventForm.get('foodDetails') as FormArray;
  }

  newFood():FormGroup{
    return this.formBuilder.group({
      drinkName: ['',Validators.required],
      drinkQuantity: ['',Validators.required],
      drinkCost: ['',Validators.required],
      foodName: ['',Validators.required],
      foodQuantity: ['',Validators.required],
      foodCost:['',Validators.required]
    })
  }

  addFood(){
    this.foodDetails().push(this.newFood());
  }

  removeFood(i: number){
    this.foodDetails().removeAt(i);
  }

  equipmentDetails():FormArray{
    return this.eventForm.get('equipmentDetails') as FormArray;
  }

  newEquipment():FormGroup{
    return this.formBuilder.group({
      equipmentName: ['',Validators.required],
      equipmentCost: ['',Validators.required],
      equipmentType: ['',Validators.required],
    })
  }

  addEquipment(){
    this.equipmentDetails().push(this.newEquipment());
  }

  removeEquipment(i: number){
    this.equipmentDetails().removeAt(i);
  }

  saveEvent():void {
    this.eid = this.route.snapshot.paramMap.get('eid');
    if(this.eid !== null){
      this.eventService.getEventById(this.eid).subscribe((events: any)=>{
        this.eventForm.patchValue(events);
      })
    }
    
    this.eventData = this.eventForm.value;
    if(this.eid == null){
    this.eventService.saveEvent(this.eventForm.value).subscribe((message: any)=>{
      alert(message);
      this.router.navigate(['home']);
    })
    }
    else{
      this.eventService.updateEvent((this.eid),this.eventData).subscribe((message: any)=>{
        alert(message);
        this.router.navigate(['home']);
      })
    }
  }

}
