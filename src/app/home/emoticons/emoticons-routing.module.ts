import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmoticonsPage } from './emoticons.page';

const routes: Routes = [
  {
    path: '',
    component: EmoticonsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmoticonsPageRoutingModule {}
