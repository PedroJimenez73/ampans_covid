import { Component, OnInit } from '@angular/core';

declare var window: any;

@Component({
  selector: 'app-diapo2',
  templateUrl: './diapo2.component.html',
  styleUrls: ['./diapo2.component.scss']
})
export class Diapo2Component implements OnInit {

  constructor() { }

  ngOnInit() {
    const scrollToTop = window.setInterval(() => {
    const pos = window.pageYOffset;
        if (pos > 0) {
            window.scrollTo(0, pos - 20); 
        } else {
            window.clearInterval(scrollToTop);
        }
    }, 16);
  }

}
