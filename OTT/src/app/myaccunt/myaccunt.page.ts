import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-myaccunt',
  templateUrl: './myaccunt.page.html',
  styleUrls: ['./myaccunt.page.scss'],
})
export class MyaccuntPage implements OnInit {
  actionslideOpt = {
    initialSlide: 0,
    slidesPerView: 3.3,
    spaceBetween: 10,
  }
  iid: any;
  name: string;
  mobile: string;
  email: string;
  date: string;
  i = false;
  constructor(public navctrl:NavController) { this.iid=0}

  ngOnInit() {
    console.log("MyAccount")
  }
  
  set(id) {
    if(this.iid == 0){
      this.iid=id
    }
    else{
      this.iid=0
    }
  }
  back(){
    this.navctrl.navigateForward('/profile')
  }
  Submit(){
    this.navctrl.navigateForward('/profile')
  }
  clear(id){
    if(id == 1){
      this.name = ""
    }
    if(id == 2){
      this.mobile = ""
    }
    if(id == 3){
      this.email = ""
    }
    if(id == 4){
      this.date = ""
    }
  }
}
