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
  }

    selectItem(e) {
        e--
        $(".item").removeClass("selected");
        $(".item").eq(e).toggleClass("selected");
    }

}
