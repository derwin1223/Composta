import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SQLservicioService {
  server: any = "127.0.0.1";
  puerto: any = "8000";
  constructor(public http: HttpClient) {

  }

  usuario() {
    return this.http.get('http://127.0.0.1:8000/medidas/' )
  }
  obtenerComposta() {
    return this.http.get('http://' + this.server + ':' + this.puerto +'/compostas/' )
  }
}