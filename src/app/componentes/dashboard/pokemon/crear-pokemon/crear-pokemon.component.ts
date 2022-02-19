import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/modelo/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';


@Component({
  selector: 'app-crear-pokemon',
  templateUrl: './crear-pokemon.component.html',
  styleUrls: ['./crear-pokemon.component.css']
})
export class CrearPokemonComponent implements OnInit {

  objPokemon! : Pokemon ;

  constructor(private pokemonService : PokemonService,
                private router : Router,
                private _snackBar : MatSnackBar) { }

  ngOnInit(): void {

    this.objPokemon = new Pokemon("","");
  }

  guardarPokemon(){

    console.log("Nombre " + this.objPokemon.nombre + " " + "tipo " + this.objPokemon.tipo);

    this.pokemonService.crearPokemon(this.objPokemon)
    .subscribe(
      resultado =>{
                    this.router.navigate(['dashboard/pokemones']);
                    this.mostrarMensaje("Pokemon agregado correctamente");

    },
      error => console.log('Error al guardar pokemon.. '+error));

  }

  mostrarMensaje(mensaje: string) {
    this._snackBar.open(mensaje , 'Cerrar', {
      horizontalPosition: "center",
      verticalPosition: "top",
    });
  }

}
