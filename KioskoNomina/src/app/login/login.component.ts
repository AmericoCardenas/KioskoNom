import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../services/login-service.service';
import { NgForm} from "@angular/forms";
import { TrabajadorModule } from '../models/trabajador/trabajador.module';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  usuario?: string;
  password?: string;
  list: TrabajadorModule[] = [];

  constructor(public service: LoginServiceService, private router: Router) {

  }

  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    }
    else if (error.status === 404) {
      alert("El usuario ingresado no existe");
      this.usuario = "";
      this.password = "";
    }
    else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  onSubmit(form: NgForm) {
    if (this.usuario== undefined || this.password == undefined) {
      alert("Favor de capturar el usuario y/o contraseña");
    }
    else {
      this.service.login(this.usuario, this.password)
        .subscribe({
          next: res => {
            this.list = res as TrabajadorModule[]
            localStorage.setItem('list_trabajador', JSON.stringify(this.list));
            this.router.navigate(['nomina'], {
              state: {
                data: this.list
              }
            })
          },
          error: err => {
            this.handleError(err);
          }
        })

    }

    
  }



  ngOnInit(): void {
  }



}
