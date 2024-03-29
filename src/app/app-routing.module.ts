import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  
  { 
    path: 'home',
    loadChildren: ()=> import('./home/home.module').then(m=>m.HomeModule)
  },
  { 
    path: 'blog',
    loadChildren: ()=> import('./blog/blog.module').then(m=>m.BlogModule)
  },
  {
    path: '**', redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
