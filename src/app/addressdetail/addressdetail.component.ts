import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RegistrationDetailServiceService} from '../services/registration-detail-service.service';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-addressdetail',
  templateUrl: './addressdetail.component.html',
  styleUrls: ['./addressdetail.component.css']
})
export class AddressdetailComponent implements OnInit {
  addressDetailForm:FormGroup;
  currentAddress:string;
  state:string;
  city:string;
  zipCode:number;
  previousAddress:string;
  submitted=false;

  constructor(private router:Router,private registrationService: RegistrationDetailServiceService,private fb:FormBuilder) { }
  

  ngOnInit() {
    this.addressDetailForm=this.fb.group({
      currentAddress:['',Validators.required],
      city:['',Validators.required],
      state:['',Validators.required],
      zipCode:['',[Validators.required,Validators.maxLength(5)]],
      previousAddress:['',Validators.required],
  
});
if(this.registrationService.regDetailModel.currentAddress!=null)
   {
    this.currentAddress=this.registrationService.regDetailModel.currentAddress;
    this.state=this.registrationService.regDetailModel.state;
    this.city=this.registrationService.regDetailModel.city;
    this.zipCode=this.registrationService.regDetailModel.zipCode;
    this.previousAddress=this.registrationService.regDetailModel.previousAddress;
   }
  }

  
  get formFields(){
    return this.addressDetailForm.controls;
  }
  
   onAddress(){
     this.submitted=true;
     if(this.addressDetailForm.valid)
     {
    this.registrationService.regDetailModel.currentAddress = this.formFields.currentAddress.value;
    this.registrationService.regDetailModel.state = this.formFields.state.value;
    this.registrationService.regDetailModel.city = this.formFields.city.value;
    this.registrationService.regDetailModel.zipCode = this.formFields.zipCode.value;
    this.registrationService.regDetailModel.previousAddress = this.formFields.previousAddress.value;
    console.log(this.registrationService.regDetailModel.currentAddress)
    this.router.navigate(['/password']);
     }
  }

  onPrevious(){
    this.router.navigate(['/registration']);
  }

}
