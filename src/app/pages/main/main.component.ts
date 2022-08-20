import { Component, OnInit, ViewChild ,TemplateRef} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  @ViewChild('abilites-contain') abilites!: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
    console.log(this.abilites.elementRef.nativeElement)
  }

}
