import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  url: string;
  imgurl: string;
  UserData: any;

  constructor() {
    this.url = 'https://appdevelopmentsingapore.com/azsalessmart/api/'
    this.imgurl = 'https://appdevelopmentsingapore.com/azsalessmart/admin/'
  }

  logindata() {
    if (localStorage.getItem('astrazeneca_login')) {
      this.UserData = JSON.parse(localStorage.getItem('astrazeneca_login'))
      console.log(this.UserData)
      // this.UserId = UserData.id
      // this.UserToken = UserData.token
      // this.UserName = UserData.name
      // this.UserEmail = UserData.email
      // this.UserPhone = UserData.phone_number
    }
  }


}
