import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-viewallsent',
  templateUrl: './viewallsent.page.html',
  styleUrls: ['./viewallsent.page.scss'],
})
export class viewallsentPage implements OnInit {

  constructor(public navctrl:NavController) { }

  ngOnInit() {
  }

  back(){
    this.navctrl.pop()
  }

}
