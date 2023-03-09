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
          <div style="text-align:justify; height:300px; overflow-y: scroll;">
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
              Para el procesamiento de las imagenes se utilizo Butler para entrenamiento de las imagenes de credenciales, permitiendo consumir este servicio
              se hizo la implementacion de la API para obtener los datos de las credenciales y en la API la manipulacion de estos datos.

          </div>
          `,
      footer: '<a href=""></a>',
      confirmButtonColor:'#3fc3ee',


      heightAuto: false,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }

  alertUjed1(){
    Swal.fire({
      icon: 'info',
      title: 'Citas Aspirantes',
      html: `
          <div style="text-align:justify; height:300px; overflow-y: scroll;">
              <p>
              El desarrollo del siguiente proyecto fue con Angular 14 , Laravel 9 en la API y MYSQL en la BDD
              a peticion total del cliente. <br><br>


              Se desarrollaron modulos administrativos y para alumnos, los cuales
              cada uno de ellos contiene funcionalidades para cada tipo de usuario. <br><br>


              Como caracteristica importante fue la manipulacion de los datos obtenidos
              de los alumnos registrados y creacion de PDF dinamicos con los datos de
              cada alumno al igual enviarles un correo con la recepcion del archivo PDF.<br><br>

              Se permitio una logica dentro de la API y BD para permitir citas
              en una misma hora a distintos alumnos y dentro de la parte administrativa
              un apartado para limitar la fecha de registro de los alumnos. <br><br>

              La implementacion y despliegue fue a cargo del cliente, solo se le apoyo
              para configurar ciertos aspectos como las credenciales de su correo electronico
              para enviar los PDF y la configuracion del servidor para permitir esa comunicacion.


          </div>
          `,
      footer: '<a href=""></a>',
      confirmButtonColor: '#3fc3ee',

      heightAuto: false,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }

  alertCut(){
    Swal.fire({
      icon: 'info',
      title: 'CUT APD-ACADEMICS',
      html: `
          <div style="text-align:justify; height:300px; overflow-y: scroll;">
              <p>
              El desarrollo del proyecto fue realizado con Angular/Ionic 6, VB.net en la API y SQL Server. <br><br>

              Mi participacion dentro del proyecto fue desde la creacion y analisis de la BDD,
              el desarrollo y logica de la API y la comunicacion con la parte visual la cual
              se desarrollo con Angular. <br><br>

              Dentro de los modulos que se desarrollaron fue el pago en linea, donde se implemento
              Banorte Payworks para permitir a los usuarios pagar desde la plataforma. <br><br>

              Creacion de recibos personalizados y envio de Whatsapp con los recibos de cada una
              de las ordenes de pago correspondientes. <br><br>

              Dentro de la plataforma se pueden solicitar constancias y credenciales, todo
              esto con datos dinamicos y el diseño que la empresa solicito. <br><br>

              La implementacion de este proyecto fue por medio de una VPS de la propia empresa
              y  Azure para montar la BDD en la nube. <br><br>


          </div>
          `,
      footer: '<a href="https://cut.apdacademics.mx" target="_blank">Visita CUT-APDACADEMICS</a>',
      confirmButtonColor: '#3fc3ee',

      heightAuto: false,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }

  alertAPDACADEMICS(){
    Swal.fire({
      icon: 'info',
      title: 'APD-ACADEMICS',
      html: `
          <div style="text-align:justify; height:300px; ">
              <p>
              El desarrollo de esta aplicacion fue totalmente con Angular 14,
              se trata de una pagina web para promocionar los servicios que la empresa ofrece. <br> <br>

              El diseño de la pagina , animaciones, ilustraciones y colores usados fueron recomendaciones
              que se le otorgaron al cliente y fueron aceptadas.<br> <br>


          </div>
          `,
      footer: '<a href="https://apdacademics.mx" target="_blank">Visita APD ACADEMICS</a>',
      confirmButtonColor: '#3fc3ee',

      heightAuto: false,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }
  alertAPD(){
    Swal.fire({
      icon: 'info',
      title: 'GRUPO APD',
      html: `
          <div style="text-align:justify; height:300px; ">
              <p>
              El desarrollo de esta aplicacion fue totalmente con Angular 14,
              se trata de una pagina web para promocionar los servicios que la empresa ofrece. <br> <br>

              El diseño de la pagina , animaciones, ilustraciones y colores usados fueron recomendaciones
              que se le otorgaron al cliente y fueron aceptadas.<br> <br>


          </div>
          `,
      footer: '<a href="https://grupoapd.mx" target="_blank">Visita APD</a>',
      confirmButtonColor: '#3fc3ee',

      heightAuto: false,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }
    alertSILAB(){
    Swal.fire({
      icon: 'info',
      title: 'SILAB',
      html: `
          <div style="text-align:justify; height:300px; ">
              <p>
              El desarrollo de esta aplicacion fue totalmente con Laravel 6 y MYSQL en la BDD,
              se trata de una aplicacion para el control escolar del ITSL. <br> <br>

              Mi participacion en el desarrollo de esta aplicacion fue desde el analisis del sistema,
              creacion de diagramas y BDD, En la creacion y diseño de cada una de las pantallas y toda
              la inteligencia de negocio de la aplicacion.<br> <br>


          </div>
          `,
      footer: '<a></a>',
      confirmButtonColor: '#3fc3ee',

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
