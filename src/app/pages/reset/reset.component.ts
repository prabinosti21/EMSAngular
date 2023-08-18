import { Component, OnInit } from '@angular/core';
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

  searchValue!:string;

 
  ngOnInit(): void {
    
  }

  checkEmail():void{
    this.userService.checkEmail(this.searchValue).subscribe((message : any)=>{
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
