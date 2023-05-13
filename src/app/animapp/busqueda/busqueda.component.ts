import { Component } from '@angular/core';
import { AnimappService } from '../animapp.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {
  
  buscar : string='';

  constructor(private animappService : AnimappService){}

  busqueda() {
    this.animappService.buscarGifs(this.buscar);
    this.buscar='';
   
}

}
