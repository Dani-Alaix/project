import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PublicationPageRoutingModule } from './publication-routing.module';

import { PublicationPage } from './publication.page';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EmoticonsPageModule } from '../../emoticons/emoticons.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublicationPageRoutingModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    EmoticonsPageModule
  ],
  declarations: [PublicationPage]
})
export class PublicationPageModule {}
