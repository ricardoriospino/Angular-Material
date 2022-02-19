import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogueo : FormGroup ;
  carga = false;

  constructor(private fb : FormBuilder,
              private _snackBar : MatSnackBar,
              private router : Router) {

      this.formLogueo = fb.group({
      usuario : ['',Validators.required],
      clave : ['',Validators.required]
    });
   }

  ngOnInit(): void {
  }

  ingresar(){

    const usuario = this.formLogueo.value.usuario ;
    const clave = this.formLogueo.value.clave ;
    console.log("Usuario : " + usuario + " clave : " + clave);

    if(usuario == "ricardo" && clave == "123"){
      this.load();

    }else{
      this.openSnackBar("Usuario y clave incorrecta");
    }
  }

  openSnackBar(mensaje: string) {
    this._snackBar.open(mensaje , 'Cerrar', {
      horizontalPosition: "center",
      verticalPosition: "top",
    });
  }

  load(){
    this.formLogueo.reset(); // limpiar las cajas
    this.carga = true;
    setTimeout(()=>{
      this.router.navigate(['dashboard']);
    }, 3000)
  }
}
