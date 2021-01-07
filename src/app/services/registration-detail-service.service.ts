import { Injectable } from '@angular/core';
import {RegDetailsModel} from '../model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationDetailServiceService {

  constructor() { }
  regDetailModel: RegDetailsModel = {

    firstName:null,
    lastName:null,
    dob:null,
    emailId:null,
    role:null,
    manager:null,
    currentAddress:null,
    zipCode:null,
    city:null,
    state:null,
    previousAddress:null,
    password:null
};
personalDetails(){

  this.regDetailModel.firstName;
  
}


}


