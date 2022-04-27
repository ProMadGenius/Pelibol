import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListarPeliculasComponent } from './peliculas/listar-peliculas/listar-peliculas.component';
import { ShowPeliculasService } from 'src/app/services/show-peliculas.service';
@NgModule({
  declarations: [
    AppComponent,
    ListarPeliculasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ShowPeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
