import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class TrabajadorModule {

  idEmpleado?: number;
  nombre?: string;
  apellidoP?: string;
  apellidoM?: string;
  nombreCompleto?: string;
  idPuesto?: number;
  idDepto?: number;
  puesto?: string;
  //UserEmp?: string;
  //Password?: string;

}
