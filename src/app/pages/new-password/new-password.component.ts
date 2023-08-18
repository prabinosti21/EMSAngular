import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router){}
  
  passwordForm!: FormGroup;

  ngOnInit(): void {
    this.passwordForm = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      password:['', Validators.required]
    })
  }

  setPassword():void{
    const user = this.passwordForm.value;
    console.log(user);
    this.userService.setPassword(user).subscribe((message: any)=>{
      if(message === 'Password changed successfully'){
        alert(message);
        this.router.navigate(['']);
      }
      else{
        alert(message);
        this.router.navigate(['reset']);
      }
    })
  }

}
