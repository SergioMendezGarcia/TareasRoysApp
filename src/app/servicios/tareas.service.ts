import { Injectable } from '@angular/core';
import { Task } from '../modelos/tarea';
import { Proy } from '../modelos/proyectos';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TareasService {
  
  private _tasks = this.getTareasFromAPI();
  private _proy = this.getProyectosFromAPI();
  constructor(private _http:HttpClient) { }

  getTareas(){
    return this._tasks;
  };

  getTareaById(unTid){
    return this._tasks.find(function(aTar){
      return aTar.id==unTid;
    });
  };

  getProy(unPid){
    return this._proy.find(function(aTar){
      return aTar.id==unPid;
    });
  };

  getTareasFromAPI():Observable<Task[]> {
    return this._http.get<Task[]>('http://www.mocky.io/v2/5cadb04c2f00002f283a96e6');
  };

  getProyectosFromAPI():Observable<Proy[]> {
    return this._http.get<Proy[]>('http://www.mocky.io/v2/5cadb0952f00000d343a96e8');
  };

  addTarea(nuevaTarea: Task) {
    this._tasks.push(nuevaTarea);
  }

  addTareaToAPI(nuevaTarea: Task) {
    return this._http.post<Tarea[]>('http://www.mocky.io/v2/5cadb04c2f00002f283a96e6', nuevaTarea);
  }
}
