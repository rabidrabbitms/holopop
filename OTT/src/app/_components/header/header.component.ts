import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  constructor(
    public menubar: MenuController,) { }
  async ngOnInit(){
  }
  menu() {
    this.menubar.open()
  }
}
