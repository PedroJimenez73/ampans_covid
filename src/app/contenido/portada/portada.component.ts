import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.scss']
})
export class PortadaComponent implements OnInit {

    loading = true;
    @Output() actFinalizada = new EventEmitter<boolean>();

    constructor() { }

    ngOnInit() {
        setTimeout(()=> {
        this.loading = false;
        }, 750)
    }

}
