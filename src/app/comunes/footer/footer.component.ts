import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ScormStoreService } from 'src/app/servicios/scorm-store.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    pantallaIndex = 0;
    total = 0
    item: any;
    showNext = true;

    subscripState: Subscription;
    results = [];
    totalAciertos = 0;
    porcentAciertos: number;

    constructor(private scormStoreService: ScormStoreService) { }

    ngOnInit() {
        this.total = this.scormStoreService.getInitialState() - 1;
        this.subscripState = this.scormStoreService.state$
                                .subscribe(
                                    (data: any) => {
                                        this.pantallaIndex = data.currentPantalla;
                                        if (data.progress[data.currentPantalla][1]) {
                                            this.showNext = false;
                                        } else {
                                            this.showNext = true;
                                        }
                                    },
                                    (error:any) => {console.log(error)
                                });
    }

    prevPantalla() {
        this.scormStoreService.prevPantalla()
    }

    nextPantalla() {
        this.scormStoreService.nextPantalla()
    }

    exit() {
        this.scormStoreService.exit();
    }

}
