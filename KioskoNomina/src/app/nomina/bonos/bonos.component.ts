import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BonosCheckinModule } from '../../models/bonos-checkin/bonos-checkin.module';
import { TrabajadorModule } from '../../models/trabajador/trabajador.module';
import { BonosService } from '../../services/bonos.service';

@Component({
  selector: 'app-bonos',
  templateUrl: './bonos.component.html',
  styleUrls: ['./bonos.component.css']
})
export class BonosComponent implements OnInit {
  @Input() bonosList: BonosCheckinModule[] = [];
  displayedColumns = [ 'bono', 'total', 'observaciones'];



  constructor(private route: ActivatedRoute, public service: BonosService) { }

  ngOnInit(): void {
    
  }


}
