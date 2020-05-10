import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ScormStoreService } from 'src/app/servicios/scorm-store.service';

declare var window: any;
declare var $: any;

@Component({
  selector: 'app-indice',
  templateUrl: './indice.component.html',
  styleUrls: ['./indice.component.scss']
})
export class IndiceComponent implements OnInit {

    menu: any;
    subscripMenu: Subscription;
    
    constructor(private scormStoreService: ScormStoreService) { 

    }

    ngOnInit() {
        this.subscripMenu = this.scormStoreService.state$
                                .subscribe(
                                    (data: any) => {
                                        this.menu = data.menu.filter(elem => elem.menu === true);
                                        let progress = data.progress;
                                        this.menu.forEach((element) => {
                                            element.learned = progress[element.page][2]  
                                        });
                                    },
                                    (error:any) => {console.log(error)
                                });
    }

    navTo(e) {
        this.scormStoreService.navTo(e);
    }

}
