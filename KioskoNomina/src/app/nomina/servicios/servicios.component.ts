import { Component, Input, OnInit } from '@angular/core';
import { ServiciosCheckinModule } from '../../models/servicios-checkin/servicios-checkin.module';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  @Input() serviciosList: ServiciosCheckinModule[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
