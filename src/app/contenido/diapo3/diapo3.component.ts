import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diapo3',
  templateUrl: './diapo3.component.html',
  styleUrls: ['./diapo3.component.scss']
})
export class Diapo3Component implements OnInit {

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
