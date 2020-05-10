import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diapo7',
  templateUrl: './diapo7.component.html',
  styleUrls: ['./diapo7.component.scss']
})
export class Diapo7Component implements OnInit {

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
