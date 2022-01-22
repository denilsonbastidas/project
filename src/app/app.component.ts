import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  public contMain: boolean = true;

  constructor(
    private _renderer: Renderer2,

  ) { }
  ngOnInit() { }

  // animation navbar
  animateNavbar(navbar: any,event:any) {

    var scrollUserY = window.scrollY;
    if (scrollUserY > 100) {
      this._renderer.addClass(navbar, 'event-scroll');
    } else {
      this._renderer.removeClass(navbar, 'event-scroll');
    }          
  }
}
