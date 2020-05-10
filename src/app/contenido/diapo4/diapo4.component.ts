import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-diapo4',
  templateUrl: './diapo4.component.html',
  styleUrls: ['./diapo4.component.scss']
})
export class Diapo4Component implements OnInit {

    @ViewChild('flexyNotIe', {static: true}) flexyNotIeRef: ElementRef;
    @ViewChild('flexyIe', {static: true}) flexyIeRef: ElementRef;

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
        const isIEOrEdge = /msie\s|trident\/|edge\//i.test(window.navigator.userAgent)
        if(isIEOrEdge) {
            this.flexyIeRef.nativeElement.style.display = 'flex';
            this.flexyNotIeRef.nativeElement.style.display = 'none';
        } else {
            this.flexyIeRef.nativeElement.style.display = 'none';
            this.flexyNotIeRef.nativeElement.style.display = 'flex';
        }
    }

    flip(e) {
        e--
        $(".flip-card").eq(e).toggleClass('turn');
    }

    flipIE(e) {
        e--
        $(".ie-card").eq(e).toggleClass('show');
    }

}
