import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NomgenService {
  url: string = environment.apiBaseUrl + '/NomGenCheckins/NomGenByEmpleado'
  fi?: string;
  ff?: string;
  constructor(private http: HttpClient, private router: Router, private datePipe: DatePipe) { }

  GetNomGenCheckinByEmpleado(fechainicial: any, fechafinal: any, empleado?: string) {
    this.fi = this.datePipe.transform(new Date(fechainicial), 'dd-MM-yyyy')?.toString();
    this.ff = this.datePipe.transform(new Date(fechafinal), 'dd-MM-yyyy')?.toString();
    return this.http.get(this.url + '?finicial=' + this.fi + '&ffinal=' + this.ff + '&empleado=' + empleado);
  }
}
