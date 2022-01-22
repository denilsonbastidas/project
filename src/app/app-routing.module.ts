import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContmainComponent } from './components/contmain/contmain.component';
import { AllproyectosComponent } from './components/allproyectos/allproyectos.component';
const routes: Routes = [
  {path: '' , component: ContmainComponent},
  {path: 'projects', component: AllproyectosComponent},
  {path: '**' , component: ContmainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
