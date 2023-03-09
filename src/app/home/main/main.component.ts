import { Component, OnInit, ViewChild ,TemplateRef} from '@angular/core';
import { Router } from '@angular/router';
import Swal from'sweetalert2';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  visitar(pagina:string){
    if(pagina == 'apd'){
      window.open('https://grupoapd.mx', '_blank');
    }
    if(pagina == 'apdacademics'){
      window.open('https://apdacademics.mx', '_blank');
    }
    if(pagina == 'cut'){
      window.open('https://cut.apdacademics.mx', '_blank');
    }
  }

  alertCredenciales(){
    Swal.fire({
      icon: 'info',
      title: 'Aplicacion Movil Credenciales',
      html: `
          <div style="text-align:justify;">
              <p>
              Mi particiapcion en este proyecto dentro de la empresa APD fue en la implementacion, creacion de API, BDD y APP Movil.
              <br>
              <br>
              Para este proyecto utilize Angular/Ionic Framework 6 para la creacion de la aplicacion movil lanzada para android, tomando en cuenta
              siempre las reglas de programacion proporcionadas por la empresa y las buenas practicas de programacion.
              <br>
              <br>
              Para el desarrollo de la API de esta aplicacion se utilizo NodeJS y el framewrok Express, con cada una de las caracteristicas y practicas
              de programacion que la empresa solicito.
              <br>
              <br>
              Se hizo la implementacion de Azure configurando la API y la BDD dentro de este ecosistema, configurando de manera local y en la nube
              la BDD para generar replicas bidireccionales cada cierto tiempo.
                <br>
                <br>

          </div>
          `,
      footer: '<a href="">Why do I have this issue?</a>',

      heightAuto: false,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }

}
