import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diapo14',
  templateUrl: './diapo14.component.html',
  styleUrls: ['./diapo14.component.scss']
})
export class Diapo14Component implements OnInit {

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
