import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-carta-pelicula',
  templateUrl: './carta-pelicula.component.html',
  styleUrls: ['./carta-pelicula.component.css']
})
export class CartaPeliculaComponent implements OnInit {

  @Input()
  urlImagen: string;

  @Input()
  descripcion: string;

  @Input()
  nombreBoton: string;

  @Output()
  eventoDioClicEnBoton: EventEmitter<boolean> = new EventEmitter<boolean>()

  @Output()
  eventoDioClicEnImagen: EventEmitter<boolean> = new EventEmitter<boolean>()


  textoEjemplo = 'Daniel';
  textoBoton: 'Enviar';
  urlEjemploImagen = 'https://images-na.ssl-images-amazon.com/images/I/81FqhZXR9kL._SY445_.jpg';
  linkTextoEjemplo= "https://www.facebook.com";

  constructor() { }

  ngOnInit(): void {
    console.log('INIT');
    // Logica Inicial del componente
  }

  ngOnDestroy(): void {
    console.log('Destroy');
    // Dessuscribimos de todos las suscripciones
  }


  ejemploFuncion(){
    alert('Hola')
  }
  eventoOnBlur(){
    console.log('Blur')
  }

  ejecutarEventoDioClic(){
    this.eventoDioClicEnBoton.emit(true);
  }

  ejecutarEventoDioImagen(){
    this.eventoDioClicEnBoton.emit(true);
  }

}
