import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class DeduccionesCheckinModule {
  idDeduccion?: number
  idDeduccionCheckin?: string
  empleado?: string
  deduccion?: string
  total?: number
  observaciones?: string
  fecha?: string
}
