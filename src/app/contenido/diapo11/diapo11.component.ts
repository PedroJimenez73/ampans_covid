import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-diapo11',
  templateUrl: './diapo11.component.html',
  styleUrls: ['./diapo11.component.scss']
})
export class Diapo11Component implements OnInit {

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
      this.selectItem(1);
  }

    selectItem(e) {
        e--
        $(".item").removeClass("selected");
        $(".item").eq(e).toggleClass("selected");
    }

}
