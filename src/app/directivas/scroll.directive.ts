import { Directive } from '@angular/core';

//declare var window: any;

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {

    constructor() { 
        //this.scrollUp();
    }

    // scrollUp() {
    //     const scrollToTop = window.setInterval(() => {
    //         const pos = window.pageYOffset;
    //         if (pos > 0) {
    //             window.scrollTo(0, pos - 20); 
    //         } else {
    //             window.clearInterval(scrollToTop);
    //         }
    //     }, 16);
    // }

}
