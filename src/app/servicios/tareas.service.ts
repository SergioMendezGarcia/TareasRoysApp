import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  private _tasks = [
    {id: 1, desc: 'Tarea 1', time: '09/04/2019', proy: 1},
    {id: 2, desc: 'Tarea 2', time: '10/04/2020', proy: 2},
    {id: 3, desc: 'Tarea 3', time: '10/04/2021', proy: 3},
    {id: 4, desc: 'Tarea 4', time: '10/04/2022', proy: 4}
    ];
  constructor() { }
  getTareas(){
    return this._tasks;
  };
  getTareaById(unTid){
    return this._tasks.find(function(aTar){
      return aTar.id==unTid;
    });
  };
}
