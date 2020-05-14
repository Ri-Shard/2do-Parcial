import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona';
import { PersonaService } from 'src/app/services/persona.service';
import { Tiquete } from '../models/tiquete';
import { TiqueteService } from 'src/app/services/tiquete.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  searchText: string;
  personas: Persona[];
  tiquetes: Tiquete[];
  constructor(private personaService: PersonaService, private tiqueteService: TiqueteService) { }

  ngOnInit() {
    this.tiqueteService.get().subscribe(result => {
      this.tiquetes = result;
    });

  }
}
