import { Component,Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  constructor(
    private _renderer:Renderer2
  ){
  }
  ngOnInit() {  }
  // 
   animateNavbar(navbar:any) {
      
    let scrollUserY = window.scrollY
        
    if (scrollUserY > 100) {
       return this._renderer.addClass(navbar,'event-scroll');
    } else {
      return this._renderer.removeClass(navbar,'event-scroll');
    }
  }

}
