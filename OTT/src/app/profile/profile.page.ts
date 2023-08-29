import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(public navctrl:NavController) { }

  ngOnInit() {
    console.log("Profile")
  }

  back(){
    this.navctrl.navigateForward('/home')
  }
  device(){
    this.navctrl.navigateForward('/devices')
  }
  accountmanage(){
    this.navctrl.navigateForward('/accountmanage')
  }
  plan(){
    this.navctrl.navigateForward('/plan')
  }

  signout(){
    this.navctrl.navigateRoot('/login')
  }
  transaction(){
    this.navctrl.navigateRoot('/tranhis')
  }
  aditpro(){
    this.navctrl.navigateRoot('/myaccunt')
  }

}
