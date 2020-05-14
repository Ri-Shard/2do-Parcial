import { Component, OnInit } from '@angular/core';
import { Tiquete } from '../models/tiquete';
import { TiqueteService } from '../../services/tiquete.service';
import { FormGroup, FormBuilder, Validators, AbstractControl, MaxLengthValidator} from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/@base/alert-modal/alert-modal.component';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  formGroup: FormGroup;
  tiquete: Tiquete;
  tiquetes: Tiquete[];
  searchText: string;
  _nombre: string;
  _id: string;
  _valor: number;
  // tslint:disable-next-line: max-line-length
  constructor( private tiqueteService: TiqueteService, private formBuilder: FormBuilder, private modalService: NgbModal) { }

  ngOnInit() {
        this.buildForm();
    this.tiqueteService.get().subscribe(result => {
      this.tiquetes = result;

    });
  }

    private buildForm() {

          this.formGroup = this.formBuilder.group({
            idCliente: ['', Validators.required],
            nombred: ['', Validators.required],
            codigo: ['', [Validators.required]],
            ruta: ['', [Validators.required]],
            valor: [0, [Validators.required]]

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


    buscar(index: string) {
  this.tiquetes.forEach(element => {
    // tslint:disable-next-line: triple-equals
    if (index == element.idCliente) {
      this._nombre = element.nombre;
    }
    this.modal();
  });
    }


    modal() {
      this.modalService.open(ModalComponent);
  }

   valor(eleccion: string) {

   if (eleccion === '1') {
      this._valor = 90000;
    } else if (eleccion === '2') {
      this._valor = 35000;
    } else if (eleccion === '3') {
      this._valor = 40000;
    } else if (eleccion === '4') {
      this._valor = 60000;
    } else {
      this._valor = 0;
    }
  }




}
