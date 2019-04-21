import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';
import { RouterModule, Routes } from "@angular/router";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  @ViewChild('tabs') tabs: IonTabs

  constructor() { }

  ngOnInit() {
    this.tabs.select('tab1')
  }

  tab2selected() {
    console.log("i am here");
  }
}
