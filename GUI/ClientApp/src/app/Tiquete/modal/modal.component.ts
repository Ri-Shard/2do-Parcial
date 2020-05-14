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
   formGroup: FormGroup;

  constructor(private personaService: PersonaService, private formBuilder: FormBuilder) { }

  ngOnInit() {
        this.buildForm();

  }

  private buildForm() {

        this.formGroup = this.formBuilder.group({
          identificacion: ['', Validators.required],
          nombre: ['', Validators.required],
          sexo: ['', [Validators.required, this.ValidaSexo]],

        });
      }
    private ValidaSexo(control: AbstractControl) {
       const sexo = control.value;
       if (sexo.toLocaleUpperCase() !== 'M' && sexo.toLocaleUpperCase() !== 'F') {
        return { validSexo: true, messageSexo: 'Sexo No Valido' };
       }
        return null;
      }
}
