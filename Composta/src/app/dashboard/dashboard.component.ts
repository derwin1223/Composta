import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SQLservicioService } from '../serviciospi.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  resultado: any ;
  suscription:any = Subscription;
  constructor(public http: HttpClient, public router: Router,public servicioSql: SQLservicioService) { 
    this.medidas()
    this.resultado
    this.suscription = this.servicioSql.refresh$.subscribe(() =>
    this.medidas()
    )
    
  }

  ngOnInit(): void {

  }
  ngOnDestroy():void{
    this.suscription.unsubscribe();
    console.log()
  }
  medidas(){
    this.servicioSql.usuario().subscribe((data: any) => {
     this.resultado = [data.at(-1)]
    });
  }

  
}
