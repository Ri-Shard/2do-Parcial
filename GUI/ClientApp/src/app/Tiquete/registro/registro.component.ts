import { Component, OnInit } from '@angular/core';
import { Tiquete } from '../models/tiquete';
import { TiqueteService } from '../../services/tiquete.service';
import { FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/@base/alert-modal/alert-modal.component';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  formGroup: FormGroup;
  tiquete: Tiquete;
  searchText: string;
  // tslint:disable-next-line: max-line-length
  constructor( private tiqueteService: TiqueteService, private formBuilder: FormBuilder, private modalService: NgbModal) { }

  ngOnInit() {
        this.buildForm();
  }

    private buildForm() {
          this.tiquete = new Tiquete();
          this.tiquete.idCliente = '';
          this.tiquete.nombred = '';
          this.tiquete.codigo = '';
          this.tiquete.ruta = '';

          this.formGroup = this.formBuilder.group({
            idCliente: [this.tiquete.idCliente, Validators.required],
            nombred: [this.tiquete.nombred, Validators.required],
            codigo: [this.tiquete.codigo, [Validators.required, this.ValidaSexo]],
            ruta: [this.tiquete.ruta, [Validators.required]]
          });
        }
      get control() {
        return this.formGroup.controls;
         }

        onSubmit() {
              if (this.formGroup.invalid) {
                return;
              }
          this.addt();
            }


  addt() {
    this.tiquete = this.formGroup.value;
    this.tiqueteService.post(this.tiquete).subscribe(p => {
      if (p != null) {
        const messageBox = this.modalService.open(AlertModalComponent);
        messageBox.componentInstance.title = 'Resultado Operación';
        messageBox.componentInstance.message = 'Tiquete creado!!! :-)';
        this.tiquete = p;
      }
    });
  }

  private ValidaSexo(control: AbstractControl) {
     const sexo = control.value;
     if (sexo.toLocaleUpperCase() !== 'M' && sexo.toLocaleUpperCase() !== 'F') {
      return { validSexo: true, messageSexo: 'Sexo No Valido' };
     }
      return null;
    }
    buscar(id: string)
    {
    
    }
    modal(id: string)
    {

    }
  }

