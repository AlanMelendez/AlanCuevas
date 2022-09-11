import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
