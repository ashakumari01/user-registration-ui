import { Component, OnInit } from '@angular/core';
import {RegistrationDetailServiceService} from '../services/registration-detail-service.service';
import {Router} from '@angular/router';
import { FormGroup,Validators,FormControl, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
 passwordForm:FormGroup;
 submitted=false;

  constructor(private registrationService: RegistrationDetailServiceService,private router:Router,private fb:FormBuilder) { }

  cPassword:any;
  password:any;

  error_messages={
    'password':[
      {type:'required',message:'Password is Required'},
      { type: 'minlength', message: 'password length.' },
      { type: 'maxlength', message: 'password length.' }

    ]
  }

  ngOnInit() {
    this.passwordForm=this.fb.group({
      password:['',[Validators.required,Validators.minLength(8)]],
      cPassword:['',Validators.required]
   });
    // {
    //   this.passwordMatch.bind(this);

    // }
  }

  matchPassword(formGroup:FormGroup)
  {}
  get formFields(){
    return this.passwordForm.controls;
  }
  passwordMatch(formGroup: FormGroup) {
    const { value: password } = formGroup.get('password');
    const { value: cPassword } = formGroup.get('cPassword');
    return password === cPassword ? null : { passwordNotMatch: true };
  }

  onBtnClick(){
    this.submitted=true;
    if(this.passwordForm.valid)
    {
   this.registrationService.regDetailModel.password = this.cPassword;
    }
  }
  onPrevious(){
    this.router.navigate(['/addressdetail']);
  }

}
