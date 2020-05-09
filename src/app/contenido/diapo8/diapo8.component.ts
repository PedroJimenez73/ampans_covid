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
  }

    selectItem(e) {
        e--
        $(".item").removeClass("selected");
        $(".item").eq(e).toggleClass("selected");
    }

}
