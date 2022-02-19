import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'tipo', 'acciones'];
  dataSource = new MatTableDataSource<Pokemon>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private pokemonService : PokemonService,
              private _snackBar : MatSnackBar) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {

    this.cargaPokemones();
  }
  cargaPokemones(){

    this.pokemonService.obtenerPokemones()
    .subscribe(
        resultado =>{ this.dataSource.data = resultado},
        error => console.log('Error al cargar pokemones.. '+error));
  }

  openSnackBar(mensaje: string) {
    this._snackBar.open(mensaje , 'Cerrar', {
      horizontalPosition: "center",
      verticalPosition: "top",
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarPokemon(objPokemon : Pokemon){

    this.pokemonService.eliminarPokemon(objPokemon.id)
    .subscribe(
      resultado =>{
        console.log(" pokemon eliminado " + objPokemon.id);
        this.cargaPokemones();
        this.openSnackBar("Pokemon eliminado correctamente")
        },
      error => console.log('Error al eliminar pokemon.. '+error));
  }
}
