import { Component, OnInit } from '@angular/core';
import { Tiquete } from '../models/tiquete';
import { TiqueteService } from 'src/app/services/tiquete.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  searchText: string;
  tiquetes: Tiquete[];
  constructor( private tiqueteService: TiqueteService) { }

  ngOnInit() {
    this.tiqueteService.get().subscribe(result => {this.tiquetes = result; });
  }
}
