import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SQLservicioService } from '../serviciospi.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  resultado: any;

  constructor(public http: HttpClient, public router: Router,public servicioSql: SQLservicioService) {
    this.compostas()
   }

  ngOnInit(): void {
  }
  IrNavigator(Ir: any){
    console.log
    if(Ir == 1){
      this.router.navigateByUrl("/mensajes");
    }else if(Ir == 2){
      this.router.navigateByUrl("/mensajes");
    }else if(Ir == 2){
      this.router.navigateByUrl("/");
    }
    
  }

  compostas(){
    this.servicioSql.obtenerComposta().subscribe((data: any) => {
      this.resultado = data
      console.log(this.resultado)
    });
  }
}
