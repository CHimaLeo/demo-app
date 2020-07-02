import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  public usuario: any;
  public page: string = 'Consulta de Historial de Actas de Examen';

  constructor() { }

  ngOnInit(): void {
    this.usuario = 'Usuario';
  }

}
