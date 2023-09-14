import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
import { VideoRecorderCamera, VideoRecorderPreviewFrame } from '@teamhive/capacitor-video-recorder';

@Component({
  selector: 'camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {

  constructor(public navctrl: NavController,) {
  }
  optionZbar: any;
  scannedOutput: any;



  barcodeScanner() {
    
  }

  async ngOnInit() {
    const { VideoRecorder } = Plugins;
    const config: VideoRecorderPreviewFrame = {
      id: 'video-record',
      stackPosition: 'back', // 'front' overlays your app', 'back' places behind your app.
      width: 'fill',
      height: 'fill',
      x: 0,
      y: 85,
      borderRadius: 0
    };
    await VideoRecorder.initialize({
      camera: VideoRecorderCamera.FRONT, // Can use BACK
      previewFrames: [config]
    });
  };
  record() {
    const { VideoRecorder } = Plugins;
    VideoRecorder.startRecording();
  }
 async stop() {
    const { VideoRecorder } = Plugins;

    const res = await VideoRecorder.stopRecording();
    // The video url is the local file path location of the video output.
   VideoRecorder.destroy();

    return res.videoUrl;
  }


  back() {
    const { VideoRecorder } = Plugins;
    VideoRecorder.destroy();

    this.navctrl.pop()
  }

  home() {
    const { VideoRecorder } = Plugins;
    VideoRecorder.destroy();

    this.navctrl.navigateForward('/home')
  }

  download() {
    const { VideoRecorder } = Plugins;
    VideoRecorder.destroy();

    this.navctrl.navigateForward('/download')
  }

  upcome() {
    const { VideoRecorder } = Plugins;
    VideoRecorder.destroy();

    this.navctrl.navigateForward('/upcoming')
  }

  profile() {
    const { VideoRecorder } = Plugins;
    VideoRecorder.destroy();

    this.navctrl.navigateForward('/profile')
  }

}
