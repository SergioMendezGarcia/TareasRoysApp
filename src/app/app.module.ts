import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { TareasComponent } from './tareas/tareas.component';
import { ProyectosComponent } from './proyectos/proyectos.component';

import { AppRoutingModule } from './app-routing.module';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { Error404Component } from './error404/error404.component';
import { DetalleComponent } from './tareas/detalle/detalle.component';
import { DetalleProyComponent } from './proyectos/detalle-proy/detalle-proy.component';
import { NuevaTareasComponent } from './tareas/nueva-tareas/nueva-tareas.component';

@NgModule({
  declarations: [
    AppComponent,
    TareasComponent,
    ProyectosComponent,
    CabeceraComponent,
    Error404Component,
    DetalleComponent,
    DetalleProyComponent,
    NuevaTareasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
