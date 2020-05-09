import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-diapo10',
  templateUrl: './diapo10.component.html',
  styleUrls: ['./diapo10.component.scss']
})
export class Diapo10Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    selectItem(e) {
        e--
        $(".item").removeClass("selected");
        $(".item").eq(e).toggleClass("selected");
    }

}
