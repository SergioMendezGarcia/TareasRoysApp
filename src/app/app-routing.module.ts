import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TareasComponent } from './tareas/tareas.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { Error404Component } from './error404/error404.component';
import { DetalleComponent } from './tareas/detalle/detalle.component';
import { DetalleProyComponent } from './proyectos/detalle-proy/detalle-proy.component';

const routes: Routes = [
  {path:'tareas', component: TareasComponent, pathMatch: 'full' },
  {path:'tareas/:id', component: DetalleComponent, pathMatch: 'full' },
  {path:'proyectos', component: ProyectosComponent, pathMatch: 'full' },
  {path:'proyectos/:pid', component: DetalleProyComponent, pathMatch: 'full' },
  {path:'', redirectTo: 'tareas', pathMatch: 'full' },
  {path:'**', component: Error404Component, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
