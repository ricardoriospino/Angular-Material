import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { ReportesComponent } from './reportes/reportes.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CompartidoModule } from '../compartido/compartido.module';
import { CrearPokemonComponent } from './pokemon/crear-pokemon/crear-pokemon.component';



@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    PokemonComponent,
    ReportesComponent,
    MenuComponent,
    CrearPokemonComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CompartidoModule
  ]
})
export class DashboardModule { }
