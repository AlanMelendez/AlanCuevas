import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';




@NgModule({
  imports: [
    CommonModule,
  ],
  exports:[
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ]
})
export class MaterialModule { }
