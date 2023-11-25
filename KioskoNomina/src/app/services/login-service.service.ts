import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { LoginEmpleadoModule } from '../models/login-empleado/login-empleado.module';
import { TrabajadorModule } from '../models/trabajador/trabajador.module';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  url: string = environment.apiBaseUrl + '/Login/LoginEmpleado'
  //formData:LoginEmpleadoModule = new LoginEmpleadoModule()
  //list: TrabajadorModule[] = [];
  //usuario?: string;
  //password?: string;
  constructor(private http: HttpClient) { }


  login(usuario?:string,password?:string) {
    //this.usuario = this.formData.usuario;
    //this.password = this.formData.password;

    return this.http.get(this.url+'?usuario='+usuario+'&password='+password)

  }
}
