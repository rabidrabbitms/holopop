import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-viewoffer',
  templateUrl: './viewoffer.page.html',
  styleUrls: ['./viewoffer.page.scss'],
})
export class ViewofferPage implements OnInit {
  slideOpts = {
      slidesPerView: 1,
      initialSlide: 0,
      width:350,
      spaceBetween:-80,
  }
  constructor(
    public modalController: ModalController,
  ) { }

  ngOnInit() {
    console.log('ViewOffer')
  }
  close(){
    this.modalController.dismiss();
   //this.modal.onDidDismiss()
  }
  
}
