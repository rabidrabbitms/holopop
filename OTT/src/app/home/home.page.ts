import { Component, OnInit } from '@angular/core';


import { AlertController, MenuController, ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  slideOpts = {
    initialSlide: 0,
    slidesPerView: 3,
    // spaceBetween: 10,
  }
  slideOpt = {
    initialSlide: 0,
    slidesPerView: 2.1,
    spaceBetween: 10,
  }
  actionslideOpt = {
    initialSlide: 0,
    slidesPerView: 3.3,
    spaceBetween: 10,
  }
 
  showcategory: any;

  constructor(
    public menubar: MenuController,
    public navctrl: NavController,
    private alertCtrl: AlertController,
    public modalCtrl: ModalController) {
      this.showcategory = '1'      
  }


  back() {
    this.navctrl.back()
  }

  view(path) {
    switch (path) {
      case 'recieve':
        this.navctrl.navigateForward('/viewallrecieve')
        break;
      case 'sent':
        this.navctrl.navigateForward('/viewallsent')
        break;
    }
  }

  category(id){
    this.showcategory = id
  }


  menu() {
    this.menubar.open()
  }

  search(){
    this.navctrl.navigateForward('/camera')
  }

  download(){
    this.navctrl.navigateForward('/download')
  }

  upcome(){
    this.navctrl.navigateForward('/upcoming')
  }

  profile(){
    this.navctrl.navigateForward('/profile')
  }
  clickshow() {
    console.log('hit');
    this.navctrl.navigateForward('/card')
  }
 
}

