import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

  public defectCont:boolean = true;
  public contVision:boolean = false;
  public contMision:boolean = false;
  public contValores:boolean = false;



  constructor(
    private _render:Renderer2
  ) {}

  ngOnInit(): void {
  }
  showVision(){
    this.contVision = true;
    this.contMision = false;
    this.contValores = false;
    this.defectCont = false;
  }
  showMision(){
    this.contMision = true;
    this.contVision = false;
    this.contValores = false;
    this.defectCont = false;
  }
  showValores(){
    this.contValores = true;
    this.contVision = false;
    this.contMision = false;
    this.defectCont = false;
  }
}
