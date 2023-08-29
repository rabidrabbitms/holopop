import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tranhis',
  templateUrl: './tranhis.page.html',
  styleUrls: ['./tranhis.page.scss'],
})
export class TranhisPage implements OnInit {

  constructor(public navctrl:NavController) { }

  ngOnInit() { 
    console.log("tran_history")
  }
  
  back(){
    this.navctrl.navigateForward('/profile')
  }

}
