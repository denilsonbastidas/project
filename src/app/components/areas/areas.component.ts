import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css']
})
export class AreasComponent implements OnInit {

  public defect:boolean = true;
  public ingenieros:boolean = false;
  public gestion:boolean = false;
  public bim:boolean = false;
  public inspeccion:boolean = false;


  constructor() { }

  ngOnInit(): void {
  }
  contIng(){
    this.ingenieros = true;
    this.defect = false;
    this.gestion = false;
    this.bim = false;
    this.inspeccion = false;
  }
  contGest(){
    this.gestion = true;
    this.ingenieros = false;
    this.defect = false;
    this.bim = false;
    this.inspeccion = false;
  }
  contBim(){
    this.bim = true;
    this.gestion = false;
    this.ingenieros = false;
    this.defect = false;
    this.inspeccion = false;
  }
  contInsp(){
    this.inspeccion = true;
    this.bim = false;
    this.gestion = false;
    this.ingenieros = false;
    this.defect = false;
  }
}
