import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ViewofferPage } from '../viewoffer/viewoffer.page';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.page.html',
  styleUrls: ['./plan.page.scss'],
})
export class PlanPage implements OnInit {

  constructor(
    public navctrl:NavController,
    public modalController: ModalController,
    ) { }

  ngOnInit() {
    console.log('Plan')
  }

  back(){
    console.log('cabj')
    this.navctrl.pop()
  }
  async viewoffermodal(){
    const modal = await this.modalController.create({
      component:ViewofferPage,
      cssClass:'half-modal'
    })
    await modal.present();
    modal.onDidDismiss()
  }
}
