import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { UnviredCordovaSDK } from '@awesome-cordova-plugins/unvired-cordova-sdk/ngx';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule
  ],
  declarations: [Tab1Page],
  providers: [UnviredCordovaSDK]
})
export class Tab1PageModule {}
