import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RegistrationDetailServiceService} from '../services/registration-detail-service.service';
import {FormsModule} from '@angular/forms';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm:FormGroup;
  submitted=false;

  constructor(private router:Router, private registrationService: RegistrationDetailServiceService,private fb:FormBuilder) { }

  addressHidden:boolean;
  passwordHidden:boolean;
  firstName:string;
  lastName:string;
  dob:any;
  emailId:string;
  role:string;
  manager:string;
  

  ngOnInit() {
    this.addressHidden=true;
    this.passwordHidden=true;

    this.registrationForm=this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      dob:['',Validators.required],
      emailId:['',[Validators.required,Validators.email]],
      role:['',Validators.required],
      manager:['',Validators.required],

 });

 if(this.registrationService.regDetailModel.firstName!=null)
   {
    this.firstName=this.registrationService.regDetailModel.firstName;
    this.lastName=this.registrationService.regDetailModel.lastName;
    this.dob=this.registrationService.regDetailModel.dob;
    this.emailId=this.registrationService.regDetailModel.emailId;
    this.role=this.registrationService.regDetailModel.role;
    this.manager=this.registrationService.regDetailModel.manager;
   }
  }
  get formFields(){
    return this.registrationForm.controls;
  }

  onReg(){

    this.submitted=true;
    if(this.registrationForm.valid){
    this.registrationService.regDetailModel.firstName = this.formFields.firstName.value;
    this.registrationService.regDetailModel.lastName = this.formFields.lastName.value;
    this.registrationService.regDetailModel.dob = this.formFields.dob.value;
    this.registrationService.regDetailModel.emailId = this.formFields.emailId.value;
    this.registrationService.regDetailModel.role = this.formFields.role.value;
    this.registrationService.regDetailModel.manager = this.formFields.manager.value;

   console.log(this.registrationService.regDetailModel.firstName);
   console.log("this msg is a test");
    this.router.navigate(['/addressdetail']);
    }
  }   
  
}    
