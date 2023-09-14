import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-viewallrecieve',
  templateUrl: './viewallrecieve.page.html',
  styleUrls: ['./viewallrecieve.page.scss'],
})
export class viewallrecievePage implements OnInit {

  constructor(public navctrl: NavController, public menubar: MenuController) { }

  ngOnInit() {
  }
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
  menu() {
    this.menubar.open()
  }
  back(){
    this.navctrl.pop()
  }
  clickshow() {
    this.navctrl.navigateForward('/card')
  }
  clickcamera() {
    this.navctrl.navigateForward('/camera')
  }
}
