import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ConsultaComponent } from './Tiquete/consulta/consulta.component';
import { RegistroComponent } from './Tiquete/registro/registro.component';
import { AppRoutingModule } from './app-routing.module';
import { PersonaService } from './services/persona.service';
import { AlertModalComponent } from './@base/alert-modal/alert-modal.component';
import { ModalComponent } from './Tiquete/modal/modal.component';
import { FiltroTiquetePipe } from './pipe/filtro-tiquete.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ConsultaComponent,
    RegistroComponent,
    AlertModalComponent,
    ModalComponent,
    FiltroTiquetePipe
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ]),
    AppRoutingModule
  ],

  entryComponents: [AlertModalComponent],
  providers: [PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
