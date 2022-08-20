import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
<<<<<<< HEAD
import { HomeComponent } from './Pages/home/home.component';
import { NavbarComponent } from './Pages/navbar/navbar/navbar.component';
import { MainComponent } from './Pages/main/main.component';
=======
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './pages/navbar/navbar/navbar.component';
import { MainComponent } from './pages/main/main.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
>>>>>>> desarrollo

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
<<<<<<< HEAD
    NavbarComponent,
=======
>>>>>>> desarrollo
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
