import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//componentes propios
import { LoginComponent } from './componentes/login/login.component';
import { CompartidoModule } from './componentes/compartido/compartido.module';

// componente angular material


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
   /* ReactiveFormsModule,
    MatSliderModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatIconModule*/
    CompartidoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
