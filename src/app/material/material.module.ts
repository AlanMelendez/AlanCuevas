import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
<<<<<<< HEAD
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

=======
import {MatCardModule} from '@angular/material/card';
>>>>>>> origin/desarrollo




@NgModule({
  imports: [
    CommonModule,
  ],
  exports:[
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
<<<<<<< HEAD
    MatSidenavModule,
    MatListModule
=======
    MatCardModule
>>>>>>> origin/desarrollo
  ]
})
export class MaterialModule { }
