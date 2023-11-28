import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { TrabajadorModule } from '../models/trabajador/trabajador.module';
import { ActivatedRoute } from '@angular/router';
import { BonosService } from '../services/bonos.service';
import { BonosCheckinModule } from '../models/bonos-checkin/bonos-checkin.module';
import { NomgenService } from '../services/nomgen.service';
import { NomgenCheckinModule } from '../models/nomgen-checkin/nomgen-checkin.module';
import { DeduccionesCheckinModule } from '../models/deducciones-checkin/deducciones-checkin.module';
import { DeduccionesService } from '../services/deducciones.service';
import { TicketsCheckinModule } from '../models/tickets-checkin/tickets-checkin.module';
import { TicketsService } from '../services/tickets.service';
import { ServiciosCheckinModule } from '../models/servicios-checkin/servicios-checkin.module';
import { ServiciosService } from '../services/servicios.service';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable'
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-nomina',
  templateUrl: './nomina.component.html',
  styleUrls: ['./nomina.component.css']
})


export class NominaComponent implements OnInit {
  list_trabajador: TrabajadorModule[] = [];
  breakpoint?: number;
  list_nomgen: NomgenCheckinModule[] = [{
    idNomCheckin: "", totServ: 0, totSencillos: 0, totRedondos: 0,
    totTaxis:0,totEsp:0,salario:0,deducciones:0,bonos:0,total:0
  },];

  list_bonos: BonosCheckinModule[] = [{
    idBonoCheckin:"",bono:"",total:0,observaciones:"",fecha:""
  },];

  list_deducciones: DeduccionesCheckinModule[] = [{
    idDeduccionCheckin: "", deduccion: "", total: 0, observaciones: "", fecha: ""
  },];

  list_tickets: TicketsCheckinModule[] = [{
    idTicketCheckin: "", unidad: "", litros: 0, rendReq: 0, kmGpsAnt: 0, kmGps: 0, kmGpsRec: 0, rendGps:0
  },];

  list_servicios: ServiciosCheckinModule[] = [{
    idServicioCheckin: "", fservicio: "", cliente: "", ruta: "", turno: "", tipo: "", unidad: ""
  },];

  fechainicial: any;
  fechafinal: any;
  empleado: any;



  constructor(private route: ActivatedRoute, private bonoservice: BonosService,
    private nomgenservice: NomgenService, private deduccionservice: DeduccionesService,
    private ticketservice: TicketsService, private servicioservice: ServiciosService,
    private _renderer: Renderer2, private datePipe: DatePipe) { }


  ngOnInit(): void {
    this._renderer.setStyle(document.body, 'overflow', 'hidden');
    this._renderer.setStyle(document.body, 'height', '100%');

    this.route.paramMap.subscribe(params => {
      this.list_trabajador = window.history.state.data;
    });

    this.list_trabajador = JSON.parse(localStorage.getItem('list_trabajador') || '{}');
    localStorage.setItem('list_trabajador', JSON.stringify(this.list_trabajador));
    console.log(this.list_trabajador);

    this.breakpoint = (window.innerWidth <= 400) ? 1 : 6;


  }

  OnFechaAccept() {
    this.empleado = (<HTMLInputElement>document.getElementById("empleado")).value;

    if (this.fechainicial > this.fechafinal) {
      alert("la fecha inicial no puede ser mayor a la fecha final");
    }
    else if (this.fechafinal == undefined && this.fechainicial == undefined) {
      alert("Favor de seleccionar la fecha inicial y la fecha final");
    }
    else if (this.fechafinal == undefined) {
      alert("Favor de seleccionar la fecha final");
    }
    else if (this.fechainicial == undefined) {
      alert("Favor de seleccionar la fecha inicial");
    }
    else {
      //NOMGEN SERVICE
      this.nomgenservice.GetNomGenCheckinByEmpleado(this.fechainicial, this.fechafinal, this.empleado)
        .subscribe({
          next: res => {
            console.log(res);
            this.list_nomgen = res as NomgenCheckinModule[]
          },
          error: err => { console.log(err) }
        })

      //BONO SERVICE
      this.bonoservice.GetBonosByEmpleado(this.fechainicial, this.fechafinal, this.empleado)
        .subscribe({
          next: res => {
            console.log(res);
            this.list_bonos = res as BonosCheckinModule[]
          },
          error: err => { console.log(err) }
        })

      //DEDUCCIONES SERVICE
      this.deduccionservice.GetDeduccionesByEmpleado(this.fechainicial, this.fechafinal, this.empleado)
        .subscribe({
          next: res => {
            console.log(res);
            this.list_deducciones = res as DeduccionesCheckinModule[]
          },
          error: err => { console.log(err) }
        })

      //TICKETS SERVICE
      this.ticketservice.GetTicketsCheckinByEmpleado(this.fechainicial, this.fechafinal, this.empleado)
        .subscribe({
          next: res => {
            console.log(res);
            this.list_tickets = res as TicketsCheckinModule[]
          },
          error: err => { console.log(err) }
        })

      //SERVICIOS SERVICE
      this.servicioservice.GetServiciosCheckinByEmpleado(this.fechainicial, this.fechafinal, this.empleado)
        .subscribe({
          next: res => {
            console.log(res);
            this.list_servicios = res as TicketsCheckinModule[]
          },
          error: err => { console.log(err) }
        })
    }

  }

   SavePDF() {
     const doc = new jsPDF();
     autoTable(doc, {
       head: [['Fecha Inicial', 'Fecha Final']],
       body: [
         [this.fechainicial,this.fechafinal],
       ],
     })
     autoTable(doc, { html: '#tb_empleado' })
     autoTable(doc, { html: '#tb_nomgen' })
     autoTable(doc, { html: '#tb_serv' })
     autoTable(doc, { html: '#tb_tickets' })
     autoTable(doc, { html: '#tb_bonos' })
     autoTable(doc, { html: '#tb_deducciones' })
     doc.save(this.empleado+'.pdf')
  }


}
