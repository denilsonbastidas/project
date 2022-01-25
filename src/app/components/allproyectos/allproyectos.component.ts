import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-allproyectos',
  templateUrl: './allproyectos.component.html',
  styleUrls: ['./allproyectos.component.css']
})
export class AllproyectosComponent implements OnInit {

  too: boolean = true
  ing: boolean = false
  gestion: boolean = false
  bim: boolean = false

  constructor(
    private _Renderer:Renderer2
  ) { }

  ngOnInit(): void {
  }

  EventToo(btnIng:any,btnToo:any,btnGest:any,btnBim:any) {
    this.too = true;
    this.ing = false;
    this.gestion = false;
    this.bim = false;
    this._Renderer.addClass(btnToo, 'activeToo');
    this._Renderer.removeClass(btnIng, 'activeIng');
    this._Renderer.removeClass(btnGest, 'activeGest');
    this._Renderer.removeClass(btnBim, 'activeBim');
  }

  EventIng( btnIng:any,btnToo:any,btnGest:any,btnBim:any){
    this.ing = true;
    this.too = false;
    this.gestion = false;
    this.bim = false;
    this._Renderer.addClass(btnIng, 'activeIng');
    this._Renderer.removeClass(btnToo, 'activeToo');
    this._Renderer.removeClass(btnGest, 'activeGest');
    this._Renderer.removeClass(btnBim, 'activeBim');
  }

  EventGestion(btnIng:any,btnToo:any,btnGest:any,btnBim:any){
    this.gestion = true;
    this.ing = false;
    this.too = false;
    this.bim = false;

    this._Renderer.addClass(btnGest, 'activeGest');
    this._Renderer.removeClass(btnIng, 'activeIng');
    this._Renderer.removeClass(btnToo, 'activeToo');
    this._Renderer.removeClass(btnBim, 'activeBim');
  }
  EventBim(btnIng:any,btnToo:any,btnGest:any,btnBim:any){
    this.bim = true;
    this.gestion = false;
    this.ing = false;
    this.too = false;

    this._Renderer.addClass(btnBim, 'activeBim');
    this._Renderer.removeClass(btnGest, 'activeGest');
    this._Renderer.removeClass(btnIng, 'activeIng');
    this._Renderer.removeClass(btnToo, 'activeToo');
  }
}
