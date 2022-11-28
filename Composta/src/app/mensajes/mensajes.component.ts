import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SQLservicioService } from '../serviciospi.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.scss']
})
export class MensajesComponent implements OnInit {
  resultado:any;
  mensajes : any =[
 
    {
      Nombre: "Moises",
      Apellido: "Paez",
      fecha : "2017-0412"
    },
    {
      Nombre: "Juan",
      Apellido: "Paez",
      fecha : "2017-0412"
    },
    {
      Nombre: "Moises",
      Apellido: "Paez",
      fecha : "2017-0412"
    }


  ]
  constructor(public http: HttpClient, public router: Router,public servicioSql: SQLservicioService) {
    this.medidas()
   }

  ngOnInit(): void {
  }

  medidas(){
    this.servicioSql.usuario().subscribe((data: any) => {
      this.resultado = data
      console.log(this.resultado)
    });
  }
  }

