import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './side-menu/navbar/navbar.component';
import { MainComponent } from './home/main/main.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SideMenuModule } from './side-menu/side-menu.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FontAwesomeModule,
    SideMenuModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
