import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartaPeliculaComponent } from './componentes/carta-pelicula/carta-pelicula.component';
import {HttpClientModule} from "@angular/common/http";
import {UsuarioService} from "./servicios/http/usuario.service";

@NgModule({
  declarations: [ //Componentes
    AppComponent,
    CartaPeliculaComponent
  ],
  imports: [ // Modulos a importr
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    UsuarioService
  ], //Servicios
  bootstrap: [AppComponent]
})
export class AppModule { }
