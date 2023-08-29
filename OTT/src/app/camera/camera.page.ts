import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { NavController } from '@ionic/angular';
import { VideoRecorderCamera, VideoRecorderPreviewFrame } from '@teamhive/capacitor-video-recorder';

@Component({
  selector: 'camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {

  constructor(public navctrl: NavController) { }



 async ngOnInit() {
    const { VideoRecorder } = Plugins;
    const config: VideoRecorderPreviewFrame = {
      id: 'video-record',
      stackPosition: 'front', // 'front' overlays your app', 'back' places behind your app.
      width: 'fill',
      height: 'fill',
      x: 0,
      y: 0,
      borderRadius: 0
    };
    await VideoRecorder.initialize({
      camera: VideoRecorderCamera.FRONT, // Can use BACK
      previewFrames: [config]
    });
  };

  back(){
    this.navctrl.pop()
  }

  home(){
    this.navctrl.navigateForward('/home')
  }

  download(){
    this.navctrl.navigateForward('/download')
  }

  upcome(){
    this.navctrl.navigateForward('/upcoming')
  }

  profile(){
    this.navctrl.navigateForward('/profile')
  }

}
