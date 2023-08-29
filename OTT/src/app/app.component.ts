import { Component } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { ConfigService } from '../services/config.service';
import { MenuController } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen'
import { register } from 'swiper/element/bundle';

register();


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  view: any;
  constructor(
    public navCtrl: NavController,
    public platform: Platform,
    private config: ConfigService,
    public menuctrl:MenuController
  ) {
    this.view = '2'
    this.initializeApp()
  }

  async initializeApp() {
    await this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.navCtrl.navigateRoot('/login')
      SplashScreen.hide();
      // if (JSON.parse(localStorage.getItem('astrazeneca_login'))) {
      //   console.log(JSON.parse(localStorage.getItem('astrazeneca_login')))
      //   this.config.logindata()
      //   this.navCtrl.navigateRoot('/home')
      // } else {
      //   this.navCtrl.navigateRoot('/login')
      // }
    });
  }
  newarrival(){
    this.menuctrl.close()
    this.navCtrl.navigateRoot('/newarrival')
  }
  favorite(){
    this.menuctrl.close()
    this.navCtrl.navigateRoot('/favorite')
  }
  watchlist(){
    this.menuctrl.close()
    this.navCtrl.navigateRoot('/watchlist')
  }
  rate(){
    this.menuctrl.close()
    this.navCtrl.navigateRoot('/rate')
  }
  terms(){
    this.menuctrl.close()
    this.navCtrl.navigateRoot('/terms')
  }
  privacypolicy(){
    this.menuctrl.close()
    this.navCtrl.navigateRoot('/privacypolicy')
  }
  logout(){
    this.menuctrl.close()
    this.navCtrl.navigateRoot('/login')
 
  }
  profile(){
    this.menuctrl.close()
    this.navCtrl.navigateRoot('/profile')
  }
}
