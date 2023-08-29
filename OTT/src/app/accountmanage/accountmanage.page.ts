import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-accountmanage',
  templateUrl: './accountmanage.page.html',
  styleUrls: ['./accountmanage.page.scss'],
})
export class AccountmanagePage implements OnInit {

  constructor(
    public navctrl:NavController,
  ) { }

  ngOnInit() {
    console.log('Account_Manage')
  }
  back(){
    this.navctrl.pop()
  }
}
