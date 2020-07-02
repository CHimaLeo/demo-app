import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActasexamenesService } from '../service/actasexamenes.service';

@Component({
  selector: 'app-actasexamenes',
  templateUrl: './actasexamenes.component.html',
  styleUrls: ['./actasexamenes.component.scss']
})
export class ActasexamenesComponent implements OnInit {

  public formGroup: FormGroup;
  public periodoOptions: any[];
  public experienciaEducativaOptions: any[];
  public tipoExamenOptions: any[];
  public datos: any[];
  public usuario: any;
  public mensaje: string;
  public defaultValue: number;

  constructor( private formBuilder: FormBuilder, private actasExamenesService: ActasexamenesService ) { }

  ngOnInit(): void {
    this.buildForm();
    this.obtenerPeriodo();
    this.obtenerExperienciaEducativa();
    this.obtenerTipoExamen();
    this.buscar();    
  }

  private buildForm(){
    this.formGroup = this.formBuilder.group({
      periodo: [''],
      nrc: [''],
      experienciaEducativa: [''],
      tipoExamen: ['']
    });
  }

  public buscar() {
    const idUsuario:number = Number(this.usuario);
    const idPeriodo:number = Number(this.formGroup.controls['periodo'].value);
    const idExpeEdu:number = Number(this.formGroup.controls['experienciaEducativa'].value);
    const idTipoExa:number = Number(this.formGroup.controls['tipoExamen'].value);
    const nrc:number = Number(this.formGroup.controls['tipoExamen'].value);
    this.actasExamenesService.obtenerDatos(idUsuario, idPeriodo, idExpeEdu, idTipoExa, nrc).subscribe(data => {
      if(data) {
        this.defaultValue = data[0];
        this.datos = data;
      } else {
        (err) => (this.mensaje = err);
      }
    });
  }

  public obtenerPeriodo() {
    this.actasExamenesService.obtenerPerido().subscribe(data => {
      if(data) {
        this.periodoOptions = data;
      } else {
        (err) => (this.mensaje = err);
      }
    });
  }

  public obtenerExperienciaEducativa() {
    this.actasExamenesService.obtenerExperienciaEducativa().subscribe(data => {
      if(data) {
        this.experienciaEducativaOptions = data;
      } else {
        (err) => (this.mensaje = err);
      }
    });
  }

  public obtenerTipoExamen() {
    this.actasExamenesService.obtenerTipoExamen().subscribe(data => {
      if(data) {
        this.tipoExamenOptions = data;
      } else {
        (err) => (this.mensaje = err);
      }
    });
  }

}

