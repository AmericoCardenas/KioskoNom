import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  url: string = environment.apiBaseUrl + '/ServiciosCheckins/ServiciosCheckinByEmpleado'
  fi?: string;
  ff?: string;
  constructor(private http: HttpClient, private datePipe: DatePipe) { }

  GetServiciosCheckinByEmpleado(fechainicial: any, fechafinal: any, empleado?: string) {
    this.fi = this.datePipe.transform(new Date(fechainicial), 'dd-MM-yyyy')?.toString();
    this.ff = this.datePipe.transform(new Date(fechafinal), 'dd-MM-yyyy')?.toString();
    return this.http.get(this.url + '?finicial=' + this.fi + '&ffinal=' + this.ff + '&empleado=' + empleado);
  }
}
