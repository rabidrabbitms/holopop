import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-privacypolicy',
  templateUrl: './privacypolicy.page.html',
  styleUrls: ['./privacypolicy.page.scss'],
})
export class PrivacypolicyPage implements OnInit {

  constructor(public navctrl:NavController) { }


  ngOnInit() {
  }
  back(){
    this.navctrl.navigateRoot('/home')
  }
}
