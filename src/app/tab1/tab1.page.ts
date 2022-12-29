import { Component } from '@angular/core';
import { UnviredCordovaSDK } from '@awesome-cordova-plugins/unvired-cordova-sdk/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private unviredSDK: UnviredCordovaSDK) {
    console.log('NgOnInit called. Waiting for call from the Unvired SDK...')
    
  }

  ngOnInit() {
   
  }

  addLog() {
    this.unviredSDK.logInfo('Tab Page', 'ngOnInit()', Date() +  " Adding Log..")
  }

}
