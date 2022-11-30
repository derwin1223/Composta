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
      fecha : "2017-04-12",
      mensaje: "Composta Inestable"
    },
    {
      Nombre: "Juan",
      Apellido: "Paez",
      fecha : "2017-04-12",
      mensaje: "Composta Inestable"
    },
  

 
    
   



  ]
  constructor(public http: HttpClient, public router: Router,public servicioSql: SQLservicioService) {
   }

  ngOnInit(): void {
  }


  
  }

