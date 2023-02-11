import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SideMenuRoutingModule } from './side-menu-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    SideMenuRoutingModule,
    MaterialModule
  ],
  exports:[
    NavbarComponent
  ]
})
export class SideMenuModule { }
