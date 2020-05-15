import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { Observable } from 'rxjs';
import { Tiquete } from '../Tiquete/models/tiquete';
import { tap, catchError } from 'rxjs/operators';

const httpOptionsPut = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  responseType: 'text'
};

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class TiqueteService {

  baseUrl: string;
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string, private handleErrorService: HandleHttpErrorService) {
    this.baseUrl = baseUrl;
  }
  get(): Observable<Tiquete[]> {
    return this.http.get<Tiquete[]>(this.baseUrl + 'api/Tiquete')
        .pipe(
            tap(_ => this.handleErrorService.log('datos enviados')),
            catchError(this.handleErrorService.handleError<Tiquete[]>('Consultar Tiquete', null))
        );
  }

  post(tiquete: Tiquete): Observable<Tiquete> {
    return this.http.post<Tiquete>(this.baseUrl + 'api/Tiquete', tiquete)
        .pipe(
            tap(_ => this.handleErrorService.log('datos enviados')),
            catchError(this.handleErrorService.handleError<Tiquete>('Registrar Tiquete', null))
        );
}

}
