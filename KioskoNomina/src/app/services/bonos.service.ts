import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment.prod';
import { BonosCheckinModule } from '../models/bonos-checkin/bonos-checkin.module';

@Injectable({
  providedIn: 'root'
})
export class BonosService {
  url: string = environment.apiBaseUrl + '/BonosCheckins/BonosByEmpleado'
  fi?: string;
  ff?: string;
  //empleado?: string;
  constructor(private http: HttpClient, private router: Router, private datePipe: DatePipe) {

  }

  GetBonosByEmpleado(fechainicial: any, fechafinal: any, empleado?: string) {
    this.fi = this.datePipe.transform(new Date(fechainicial), 'dd-MM-yyyy')?.toString();
    this.ff = this.datePipe.transform(new Date(fechafinal), 'dd-MM-yyyy')?.toString();
    return this.http.get(this.url + '?finicial=' + this.fi + '&ffinal=' + this.ff + '&empleado=' + empleado);
  }
}
