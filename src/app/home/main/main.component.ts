import { Component, OnInit, ViewChild ,TemplateRef} from '@angular/core';
import { Router } from '@angular/router';

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

}
