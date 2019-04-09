import { Component, OnInit } from '@angular/core';
import { Task } from '../modelos/tarea';

@Component({
  selector: 'tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent implements OnInit {

  tasks = null;
  filtro:string = '';
  proyId:number;
  
  filtrarTask(str, proyId){
      return this.tasks.filter(function(aT) {
        const tiene_texto = aT.desc.toLowerCase().indexOf(str.toLowerCase()) >= 0;
        const es_del_proy = parseInt(proyId)?aT.proy===parseInt(proyId):true;
        return tiene_texto && es_del_proy;
       })
   };
  constructor() { }

  ngOnInit() {

    this.tasks = [
      {id: 1, desc: 'Tarea 1', time: '09/04/2019', proy: 1},
      {id: 2, desc: 'Tarea 2', time: '10/04/2020', proy: 2},
      {id: 3, desc: 'Tarea 3', time: '10/04/2021', proy: 3},
      {id: 4, desc: 'Tarea 4', time: '10/04/2022', proy: 4},
      ];
  }

}
