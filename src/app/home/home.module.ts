import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { InfoPageModule } from './info/info.module';
import { PostPageModule } from './post/post.module';
import { PeoplePageModule } from './people/people.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    FlexLayoutModule,

    InfoPageModule,
    PostPageModule,
    PeoplePageModule
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
