import { Component, Input, OnInit } from '@angular/core';
import { NomgenCheckinModule } from '../../models/nomgen-checkin/nomgen-checkin.module';

@Component({
  selector: 'app-nomgen',
  templateUrl: './nomgen.component.html',
  styleUrls: ['./nomgen.component.css']
})


export class NomgenComponent implements OnInit {
  @Input() nomgenList: NomgenCheckinModule[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
