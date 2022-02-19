import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { CrearPokemonComponent } from './pokemon/crear-pokemon/crear-pokemon.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { ReportesComponent } from './reportes/reportes.component';


const routes: Routes = [
  {path:'',component: DashboardComponent, children:[
    {path:'',component: InicioComponent},
    {path:'pokemones',component: PokemonComponent},
    {path:'reportes',component: ReportesComponent},
    {path:'crearPokemon',component: CrearPokemonComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
