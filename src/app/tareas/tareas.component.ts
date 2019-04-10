import { Component, OnInit } from '@angular/core';
import { Task } from '../modelos/tarea';
import { TareasService } from '../servicios/tareas.service';

@Component({
  selector: 'tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent implements OnInit {

  tasks = null;
  filtro:string = '';
  proyId:number;
  
  constructor(private _tarServ:TareasService) { }

  ngOnInit() {
    // this.tasks = this._tarServ.getTareas();

    this._tarServ.getTareasFromAPI().subscribe((listaTareas) => {
      // console.log('datos:',listaTareas);
      this.tasks = listaTareas;
    });
  }

  filtrarTask(str, proyId){
    if (this.tasks) {
      return this.tasks.filter(function(aT) {
        const tiene_texto = aT.desc.toLowerCase().indexOf(str.toLowerCase()) >= 0;
        const es_del_proy = parseInt(proyId)?aT.proy===parseInt(proyId):true;
        return tiene_texto && es_del_proy;
      })
    } else return this.tasks;
   };
}
