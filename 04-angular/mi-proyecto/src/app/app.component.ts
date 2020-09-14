import {Component, OnInit} from '@angular/core';
import {UsuarioService} from "./servicios/http/usuario.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'mi-proyecto';
  habilitado = true;

  arregloNumeros = [1,2,3]

  arregloPeliculas = [
    {
      id:1,
      url:'https://images-na.ssl-images-amazon.com/images/I/81FqhZXR9kL._SY445_.jpg',
      descripcion:'Gracias a un descubrimiento, un grupo de científicos y exploradores, encabezados por Cooper, se embarcan en un viaje espacial para encontrar un lugar con las condiciones necesarias para reemplazar a la Tierra y comenzar una nueva vida allí.',
      nombrePelicula:'Interstellar',
    },
    {
      id:2,
      url:'https://images-na.ssl-images-amazon.com/images/I/91qZ-2WXQdL._SX342_.jpg',
      descripcion:'Arthur Fleck adora hacer reír a la gente, pero su carrera como comediante es un fracaso. El repudio social, la marginación y una serie de trágicos acontecimientos lo conducen por el sendero de la locura y, finalmente, cae en el mundo del crimen.',
      nombrePelicula:'Joker',
    },
    {
      id:3,
      url:'https://images-na.ssl-images-amazon.com/images/I/51B3iUSd4AL._SY445_.jpg',
      descripcion:'Daniel LaRusso llega a Los Ángeles dispuesto a hacer amigos, pero rápidamente se convierte en el blanco de los ataques de un grupo de estudiantes de karate. Por eso, le pide ayuda a Miyagi, un maestro de artes marciales que cambiará su vida.',
      nombrePelicula:'Karate Kid',
    },
    {
      id:4,
      url:'https://images-na.ssl-images-amazon.com/images/I/5117ZW5600L._AC_SY445_.jpg',
      descripcion:'Un experto en computadoras descubre que su mundo es una simulación total creada con maliciosas intenciones por parte de la ciberinteligencia.',
      nombrePelicula:'Matrix',
    },

  ]

  arregloUsuarios = [];

// Inyectar Dependencias
  constructor(
    private readonly _usuarioService: UsuarioService
  ) {
  }
  ngOnInit() {
    this.mensajeConsola(true);
  }

  mensajeConsola(objeto: boolean) {
    console.log('Llego el evento', objeto);
    const observableTraerTodos = this._usuarioService.traerTodos();
    observableTraerTodos
      .subscribe(
        (data)=>{ // THEN TRY
          console.log(data);
        },
        (error)=>{ // CATCH
          console.log(error);
        }
      );
  }

  crearUsuario() {
    const usuarioNuevo = {
      cedula: '1231231255',
      nombre: 'Naruto',
      apellido: 'Uzumaki'
    };
    const obsCrearUsuario = this._usuarioService
      .crear(usuarioNuevo);
    obsCrearUsuario
      .subscribe(
        (datos) => {
          console.log('Nuevo Usuario', datos)
          this.mensajeConsola(true);
        },
        (error) => {
          console.error('Error', error);
        }
      )
  }

}
