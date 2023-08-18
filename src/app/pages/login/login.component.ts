import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router){}
  
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      password:['', Validators.required]
    })
  }

  login():void{
    const user = this.loginForm.value;
    this.userService.login(user).subscribe((message : any)=>{
      if(message === 'Login Success'){
        this.router.navigate(['home']);
      }
      else{
        alert(message);
      }
    })
  }

}
