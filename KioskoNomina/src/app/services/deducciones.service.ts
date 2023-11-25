import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeduccionesService {
  url: string = environment.apiBaseUrl + '/DeduccionesCheckins/DeduccionesByEmpleado'
  fi?: string;
  ff?: string;
  constructor(private http: HttpClient, private router: Router, private datePipe: DatePipe) { }

  GetDeduccionesByEmpleado(fechainicial: any, fechafinal: any, empleado?: string) {
    this.fi = this.datePipe.transform(new Date(fechainicial), 'dd-MM-yyyy')?.toString();
    this.ff = this.datePipe.transform(new Date(fechafinal), 'dd-MM-yyyy')?.toString();
    return this.http.get(this.url + '?finicial=' + this.fi + '&ffinal=' + this.ff + '&empleado=' + empleado);
  }

}
