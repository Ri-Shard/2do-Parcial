import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ConsultaComponent} from '../app/Tiquete/consulta/consulta.component';
import {RegistroComponent} from '../app/Tiquete/registro/registro.component';
import {ModalComponent} from '../app/Tiquete/modal/modal.component';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
{
  path: 'consulta',
  component: ConsultaComponent
},
{
  path: 'registro',
  component: RegistroComponent
},
{
  path: 'modal',
  component: ModalComponent
},

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
