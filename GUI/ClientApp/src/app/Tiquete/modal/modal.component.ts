import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import { Persona } from '../models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  persona:  Persona;

  constructor(private personaService: PersonaService, private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

}
