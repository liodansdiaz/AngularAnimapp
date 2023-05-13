import { Component } from '@angular/core';
import { AnimappService } from '../animapp.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent {

  constructor(private animappService : AnimappService){}

  get resultados(){
    return this.animappService.resultados;
  }
}
