import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diapo12',
  templateUrl: './diapo12.component.html',
  styleUrls: ['./diapo12.component.scss']
})
export class Diapo12Component implements OnInit {

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
