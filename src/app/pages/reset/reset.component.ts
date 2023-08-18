import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit{

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router){}

  searchValue1!:string;
  searchValue2!: string;
 
  ngOnInit(): void {
    
  }

  checkUser():void{
    this.userService.checkUser(this.searchValue1,this.searchValue2).subscribe((message : any)=>{
    if(message === 'User found successfully.'){
    this.router.navigate(['set']);
    }
    else{
    alert(message);
    this.router.navigate(['']);
    }
    })
  }

}
