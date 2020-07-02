import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ActasexamenesModule } from './actasexamenes/module/actasexamenes.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './header/module/header.module';
import { UsuarioModule } from './usuario/module/usuario.module';
import { FooterModule } from './footer/module/footer.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ActasexamenesModule,
    HeaderModule,
    UsuarioModule,
    FooterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
