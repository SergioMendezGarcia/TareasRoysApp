import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TareasService } from 'src/app/servicios/tareas.service';

@Component({
  selector: 'detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private _tarSer: TareasService) { }

  ngOnInit() {
    this._route.params.subscribe(parametros=>{
      console.log('parametros:', parametros);
      const tid = parametros['id'];
      const laTarea = this._tarSer.getTareaById(tid);
      console.log('la tarea:',laTarea);
    });
  }

}
