import { Component, OnInit } from '@angular/core';
import { Task } from '../modelos/tarea';
import { TareasService } from '../servicios/tareas.service';

@Component({
  selector: 'proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {

  projects = null;
  filtro = '';
  
  filtrarProject(str){
    return this.projects.filter(busqueda => ((busqueda.pid.toString().indexOf(str) >= 0)));
   };

  constructor(private _tarServ:TareasService) { }

  ngOnInit() {

    this._tarServ.getProyectosFromAPI().subscribe((listaProy) => {
      // console.log('datos:',listaProy);
      this.projects = listaProy;
    });
  }
  }
