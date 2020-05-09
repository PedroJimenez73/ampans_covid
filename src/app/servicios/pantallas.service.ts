import { Injectable } from '@angular/core';
import { Pantalla } from '../modelos/pantalla.models';
import { PortadaComponent } from '../contenido/portada/portada.component';
import { IndiceComponent } from '../contenido/indice/indice.component';
import { Diapo1Component } from '../contenido/diapo1/diapo1.component';
import { Diapo2Component } from '../contenido/diapo2/diapo2.component';
import { Diapo3Component } from '../contenido/diapo3/diapo3.component';
import { Diapo4Component } from '../contenido/diapo4/diapo4.component';
import { Diapo5Component } from '../contenido/diapo5/diapo5.component';
import { Diapo6Component } from '../contenido/diapo6/diapo6.component';
import { Diapo7Component } from '../contenido/diapo7/diapo7.component';
import { Diapo8Component } from '../contenido/diapo8/diapo8.component';
import { Diapo9Component } from '../contenido/diapo9/diapo9.component';
import { Diapo10Component } from '../contenido/diapo10/diapo10.component';
import { Diapo11Component } from '../contenido/diapo11/diapo11.component';
import { Diapo12Component } from '../contenido/diapo12/diapo12.component';
import { Diapo13Component } from '../contenido/diapo13/diapo13.component';
import { Diapo14Component } from '../contenido/diapo14/diapo14.component';
import { Diapo15Component } from '../contenido/diapo15/diapo15.component';
import { Diapo16Component } from '../contenido/diapo16/diapo16.component';
import { Diapo17Component } from '../contenido/diapo17/diapo17.component';
import { Diapo18Component } from '../contenido/diapo18/diapo18.component';
import { Diapo19Component } from '../contenido/diapo19/diapo19.component';
import { Diapo20Component } from '../contenido/diapo20/diapo20.component';
import { Diapo21Component } from '../contenido/diapo21/diapo21.component';
import { Diapo22Component } from '../contenido/diapo22/diapo22.component';
import { Diapo23Component } from '../contenido/diapo23/diapo23.component';
import { Diapo24Component } from '../contenido/diapo24/diapo24.component';
import { Diapo25Component } from '../contenido/diapo25/diapo25.component';


@Injectable({
  providedIn: 'root'
})

export class PantallasService {

    pantallas = [
        new Pantalla(PortadaComponent, {}),
        new Pantalla(IndiceComponent, {}),
        new Pantalla(Diapo1Component, {}),
        new Pantalla(Diapo2Component, {}),
        new Pantalla(Diapo3Component, {}),
        new Pantalla(Diapo4Component, {}),
        new Pantalla(Diapo5Component, {}),
        new Pantalla(Diapo6Component, {}),
        new Pantalla(Diapo7Component, {}),
        new Pantalla(Diapo8Component, {}),
        new Pantalla(Diapo9Component, {}),
        new Pantalla(Diapo10Component, {}),
        new Pantalla(Diapo11Component, {}),
        new Pantalla(Diapo12Component, {}),
        new Pantalla(Diapo13Component, {}),
        new Pantalla(Diapo14Component, {}),
        new Pantalla(Diapo15Component, {}),
        new Pantalla(Diapo16Component, {}),
        new Pantalla(Diapo17Component, {}),
        new Pantalla(Diapo18Component, {}),
        new Pantalla(Diapo19Component, {}),
        new Pantalla(Diapo20Component, {}),
        new Pantalla(Diapo21Component, {}),
        new Pantalla(Diapo22Component, {}),
        new Pantalla(Diapo23Component, {}),
        new Pantalla(Diapo24Component, {}),
        new Pantalla(Diapo25Component, {}),
    ];

    constructor() { }

    getPantallas() {
        return this.pantallas;
    }

}
