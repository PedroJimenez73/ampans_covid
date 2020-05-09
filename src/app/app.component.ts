import { Component } from '@angular/core';
import { Pantalla } from './modelos/pantalla.models';
import { PantallasService } from './servicios/pantallas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  pantallas: Pantalla[];

  constructor(private pantallasService: PantallasService) {}

  ngOnInit() {
    this.pantallas = this.pantallasService.getPantallas();
  }

}
