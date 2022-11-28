import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MensajesComponent } from './mensajes/mensajes.component';
import { MenuAllComponent } from './menu-all/menu-all.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: '', component: MenuComponent, pathMatch: "full"},
  { path: 'menu-all', component: MenuAllComponent, pathMatch: "full"},
  { path: 'mensajes', component: MensajesComponent, pathMatch: "full"},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
