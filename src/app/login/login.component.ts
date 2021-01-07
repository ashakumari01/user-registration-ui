import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform:FormGroup;
  submitted=false;
  constructor(private router:Router,private fb:FormBuilder) { }

  ngOnInit() {
    this.loginform=this.fb.group({
      username:['',[Validators.required,Validators.email]],
      password:['',Validators.required]


    });
    
  }

  
  get formFields(){
    return this.loginform.controls;
  }

  onLogin(){
    this.submitted=true;
    if(this.loginform.invalid)
    {
      return;
    }
  }

  onRegister(){
 this.router.navigate(['/registration']);

  }

}
