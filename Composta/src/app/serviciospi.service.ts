import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SQLservicioService {
  server: any = "127.0.0.1";
  puerto: any = "8000";
  constructor(public http: HttpClient) {

  }
  public _refresh$ = new Subject<void>()
  get refresh$(){
    return this._refresh$;
  }
  usuario(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/medidas/' ).pipe(
      tap(() =>
      this._refresh$.next()
      
      )
    )
  }
  postU(medidas: any): Observable<any>{

    return this.http.post('http://127.0.0.1:8000/medidas/',medidas)
  }
  obtenerComposta() {
    return this.http.get('http://' + this.server + ':' + this.puerto +'/compostas/' )
  }
}