import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ActasexamenesService {

  constructor( private httpClient: HttpClient ) { }

  public obtenerPerido(): Observable<any[]> {
    return this.httpClient.get<any[]>('').pipe(
      map(data => data),
      catchError(this.error)
    );
  }

  public obtenerTipoExamen(): Observable<any[]> {
    return this.httpClient.get<any[]>('').pipe(
      map(data => data),
      catchError(this.error)
    );
  }

  public obtenerExperienciaEducativa(): Observable<any[]> {
    return this.httpClient.get<any[]>('').pipe(
      map(data => data),
      catchError(this.error)
    );
  }

  public obtenerDatos(idUsuario:number, idPeriodo:number, idExpeEdu:number, idTipoExa:number, nrc:number): Observable<any[]> {
    return this.httpClient.get<any[]>('').pipe(
      map(data => data),
      catchError(this.error)
    );
  }

  private error(err) {
    let error: string;
    if (err.error instanceof ErrorEvent) {
      error = `Ocurrió un error: ${err.error.message}`;
    } else {
      error = `El servidor regresó el siguiente error: ${err.status}: ${err.body.error}`;
    }
    return throwError(error);
  }
}



