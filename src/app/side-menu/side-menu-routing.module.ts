import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../home/main/main.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  // {
  //   path: '',
  //   children: [
  //     { path: 'nav', component: NavbarComponent },
      

  //     { path: '**', redirectTo: 'nav' },
  //   ]
  // },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SideMenuRoutingModule { }
