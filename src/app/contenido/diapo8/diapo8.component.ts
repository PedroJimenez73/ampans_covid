import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-diapo8',
  templateUrl: './diapo8.component.html',
  styleUrls: ['./diapo8.component.scss']
})
export class Diapo8Component implements OnInit {

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

    selectItem(e) {
        e--
        $(".item").removeClass("selected");
        $(".item").eq(e).toggleClass("selected");
    }

}
