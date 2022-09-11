import { Component, OnInit } from '@angular/core';

interface Rutas{
  nombre: string,
  ruta: string,
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  flag: boolean = false;

  activarBarra(){
    this.flag=!this.flag;
  }

  menuRutas: Rutas[] =[

    {
      nombre: 'Home',
      ruta: './home/home'
    },
    {
      nombre: 'blog',
      ruta: 'blog/inicio'
    },
    {
      nombre: 'proyectos',
      ruta: './home/home#proyects-container'
    }


  ]

}
