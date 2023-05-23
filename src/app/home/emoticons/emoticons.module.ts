import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EmoticonsPageRoutingModule } from './emoticons-routing.module';
import { EmoticonsPage } from './emoticons.page';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({  
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmoticonsPageRoutingModule,
    MatTabsModule
  ],
  declarations: [EmoticonsPage],
  exports:[EmoticonsPage]
})
export class EmoticonsPageModule {}
