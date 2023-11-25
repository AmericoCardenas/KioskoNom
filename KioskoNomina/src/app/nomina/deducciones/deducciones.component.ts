import { Component, Input, OnInit } from '@angular/core';
import { DeduccionesCheckinModule } from '../../models/deducciones-checkin/deducciones-checkin.module';

@Component({
  selector: 'app-deducciones',
  templateUrl: './deducciones.component.html',
  styleUrls: ['./deducciones.component.css']
})
export class DeduccionesComponent implements OnInit {
  @Input() deduccionesList: DeduccionesCheckinModule[] = [];
  displayedColumns = [ 'deduccion', 'total', 'observaciones'];

  constructor() { }

  ngOnInit(): void {
  }

}
