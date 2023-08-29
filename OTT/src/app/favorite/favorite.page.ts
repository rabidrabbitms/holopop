import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage implements OnInit {

  constructor(public navctrl:NavController) { }


  ngOnInit() {
  }

  back(){
    this.navctrl.navigateForward('/home')
  }

  home(){
    this.navctrl.navigateForward('/home')
  }

  search(){
    this.navctrl.navigateForward('/search')
  }

  download(){
    this.navctrl.navigateForward('/download')
  }

  profile(){
    this.navctrl.navigateForward('/profile')
  }

}
