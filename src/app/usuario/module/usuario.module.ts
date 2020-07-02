import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from '../component/usuario.component'



@NgModule({
  declarations: [UsuarioComponent],
  imports: [
    CommonModule
  ],
  exports: [UsuarioComponent]
})
export class UsuarioModule { }
