import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllproyectosComponent } from './components/allproyectos/allproyectos.component'

const routes: Routes = [
  {path: 'Allprojects', component: AllproyectosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
