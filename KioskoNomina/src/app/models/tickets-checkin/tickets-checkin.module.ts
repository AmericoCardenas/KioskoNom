import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class TicketsCheckinModule {
  idTicket?: number
  idTicketCheckin?: string
  unidad?: string
  empleado?: string
  finicial?: string
  ffinal?: string
  litros?: number
  rendReq?: number
  kmGpsAnt?: number
  kmGps?: number
  kmGpsRec?: number
  rendGps?: number
}
