import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-viewallrecieve',
  templateUrl: './viewallrecieve.page.html',
  styleUrls: ['./viewallrecieve.page.scss'],
})
export class viewallrecievePage implements OnInit {

  constructor(public navctrl:NavController) { }

  ngOnInit() {
  }

  back(){
    this.navctrl.pop()
  }

}
