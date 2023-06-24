import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from '../material/material.module';
import { MainComponent } from './main/main.component';
import { AppModule } from '../app.module';
import { NavbarComponent } from '../side-menu/navbar/navbar.component';
import { SideMenuModule } from '../side-menu/side-menu.module';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    SideMenuModule
  ]
})
export class HomeModule { }
