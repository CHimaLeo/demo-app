import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActasexamenesComponent } from '../component/actasexamenes.component'
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [ActasexamenesComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ActasexamenesComponent]
})
export class ActasexamenesModule { }
