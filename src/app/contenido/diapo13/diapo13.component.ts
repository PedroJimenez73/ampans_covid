import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diapo13',
  templateUrl: './diapo13.component.html',
  styleUrls: ['./diapo13.component.scss']
})
export class Diapo13Component implements OnInit {

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
