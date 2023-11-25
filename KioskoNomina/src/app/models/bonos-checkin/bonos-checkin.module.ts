import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class BonosCheckinModule {
  idBono?: number
  idBonoCheckin?: string
  empleado?: string
  bono?: string
  total?: number
  observaciones?: string
  fecha?: string
}
