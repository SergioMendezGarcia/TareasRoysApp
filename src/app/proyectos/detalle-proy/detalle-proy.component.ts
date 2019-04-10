import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TareasService } from 'src/app/servicios/tareas.service';

@Component({
  selector: 'detalle-proy',
  templateUrl: './detalle-proy.component.html',
  styleUrls: ['./detalle-proy.component.scss']
})
export class DetalleProyComponent implements OnInit {

  proy = this._tarSer.getTareaById();
  constructor(private _route: ActivatedRoute, private _tarSer: TareasService) { }

  ngOnInit() {
    this._route.params.subscribe(parametros=>{
      console.log('parametros:', parametros);
      const pid = parametros['id'];
      const elProyecto = this._tarSer.getProy(pid);
      console.log('el proyecto:',elProyecto);
    });
  }

}
