import { Component, OnInit } from '@angular/core';
import { NavController,MenuController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-carddetails',
  templateUrl: './carddetails.page.html',
  styleUrls: ['./carddetails.page.scss'],
})
export class CardDetailsPage implements OnInit {
 slideOpt = {
    initialSlide: 0,
    slidesPerView: 1.7,
    spaceBetween: 22,
   // autoplay:true,
    speed: 400,
  }
  
  new_url: any;
  iid: any;
  constructor(public navctrl: NavController, public sanitizer: DomSanitizer, public menubar: MenuController) { this.iid = 1;}
  ngOnInit() {
    this.new_url =  this.sanitizer.bypassSecurityTrustResourceUrl("http://www.youtube.com/embed/N9oxmRT2YWw")
  }
  back(){
    this.navctrl.pop()
  }
  set(id) {
    this.iid = id;
  }
  menu() {
    this.menubar.open()
  }

  search() {
    this.navctrl.navigateForward('/search')
  }

  download() {
    this.navctrl.navigateForward('/download')
  }

  upcome() {
    this.navctrl.navigateForward('/upcoming')
  }

  profile() {
    this.navctrl.navigateForward('/profile')
  }
}
