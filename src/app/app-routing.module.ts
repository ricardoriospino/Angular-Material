import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  {path : '',component : LoginComponent},
  {path : 'login',component : LoginComponent},
  {path:'dashboard', loadChildren: () =>
        import('./componentes/dashboard/dashboard.module').then(x => x.DashboardModule)},
  {path : '**', redirectTo : 'login'}

]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
