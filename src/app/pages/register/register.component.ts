import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(private http:HttpClient, private formBuilder: FormBuilder, private userService: UserService, private router: Router){}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      securityAnswer: ['', Validators.required]
    })
  }

  register():void{
    const user = this.registerForm.value;
    this.userService.register(user).subscribe((message: any)=>{
      if(message === 'User registered successfully'){
        alert(message);
        this.router.navigate(['']);
      }
      else{
        alert('User registration failed !!!');
      }
    })
  }

}
