import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diapo1',
  templateUrl: './diapo1.component.html',
  styleUrls: ['./diapo1.component.scss']
})
export class Diapo1Component implements OnInit {

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
