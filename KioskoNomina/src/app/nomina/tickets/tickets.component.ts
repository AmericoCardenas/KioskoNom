import { Component, Input, OnInit } from '@angular/core';
import { TicketsCheckinModule } from '../../models/tickets-checkin/tickets-checkin.module';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  @Input() ticketsList: TicketsCheckinModule[] = [];
  displayedColumns = [ 'unidad', 'litros', 'rendReq', 'kmGpsAnt', 'kmGps', 'kmGpsRec', 'rendGps'];

  constructor() { }

  ngOnInit(): void {
  }

}
