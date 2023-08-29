import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController} from '@ionic/angular';
import { EmailValidator } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  data: any;

  constructor(public navCtrl:NavController,  public alertCtrl:AlertController,) { }

  ngOnInit() {
  }

  login(){
    this.navCtrl.navigateRoot('/home')
  }

  signup(){
    this.navCtrl.navigateForward('/register')
  }
  
  async forgetpwd(){
   // this.navctrl.navigateForward('/changepwd')
    let forgotpwdalert = await this.alertCtrl.create({
      header: "Forget Password",
      subHeader: 'Please enter your email and a forget password link will be sent to the given email',
      inputs: [
        {
          name: 'email',
          placeholder: 'Enter your email'
          // NgModel : this.email
        }],

      buttons: [
        {
          text: "Cancel"
        },
        {
          text: "Submit",
        }
      ]
    });

    forgotpwdalert.present()
  }
  showErrorToast(arg0: string) {
    throw new Error("Method not implemented.");
  }

}
