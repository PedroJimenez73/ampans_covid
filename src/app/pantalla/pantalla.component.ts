import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { Pantalla } from '../modelos/pantalla.models';
import { LoadDirective } from '../directivas/load.directive';
import { Subscription } from 'rxjs';
import { ScormStoreService } from '../servicios/scorm-store.service';

@Component({
  selector: 'app-pantalla',
  templateUrl: './pantalla.component.html',
  styleUrls: ['./pantalla.component.scss']
})
export class PantallaComponent implements OnInit {

  @Input() pantallas: Pantalla[];
  @ViewChild(LoadDirective, {static: true}) load: LoadDirective;
  pantallaIndex = 0;
  subscripState: Subscription;
  showAfterLoad = false;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
             private scormStoreService: ScormStoreService) { 
  }

  ngOnInit() {
    this.subscripState = this.scormStoreService.state$
                                  .subscribe(
                                    (data: any) => {
                                        this.pantallaIndex = data.currentPantalla;
                                        this.loadComponent();
                                    },
                                    (error:any) => {console.log(error)
                                  });
  }

  ngOnDestroy() {
    // clearInterval(this.interval);
  }

  loadComponent() {
    const pantalla = this.pantallas[this.pantallaIndex];
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(pantalla.component);

    const viewContainerRef = this.load.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (componentRef.instance).data = pantalla.data;
  }



}
