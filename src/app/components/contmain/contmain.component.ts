import { Component, OnInit } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-contmain',
  templateUrl: './contmain.component.html',
  styleUrls: ['./contmain.component.css']
})
export class ContmainComponent implements OnInit {

  constructor(
    private _renderer:Renderer2
  ) { }

  ngOnInit(): void {
  }
  //  animation navbar
  animateNavbar(navbar: any) {

    var scrollUserY = window.scrollY;
    if (scrollUserY > 100) {
      this._renderer.addClass(navbar, 'event-scroll');
    } else {
      this._renderer.removeClass(navbar, 'event-scroll');
    }          
  }

}
