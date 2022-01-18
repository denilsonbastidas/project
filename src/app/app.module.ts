import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { AreasComponent } from './components/areas/areas.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { AllproyectosComponent } from './components/allproyectos/allproyectos.component';
import { SliderComponent } from './components/slider/slider.component';


@NgModule({
  declarations: [
    AppComponent,
    NosotrosComponent,
    AreasComponent,
    ProyectosComponent,
    EquipoComponent,
    ClientesComponent,
    ContactoComponent,
    AllproyectosComponent,
    SliderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
