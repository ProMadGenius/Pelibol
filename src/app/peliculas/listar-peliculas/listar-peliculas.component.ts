import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShowPeliculasService } from 'src/app/services/show-peliculas.service';
import { ApiGeneroService } from 'src/app/services/api-genero.service'
@Component({
  selector: 'app-listar-peliculas',
  templateUrl: './listar-peliculas.component.html',
  styleUrls: ['./listar-peliculas.component.css']
})
export class ListarPeliculasComponent implements OnInit {
  peliculasList$!:Observable<any[]>;
  generosList$!:Observable<any[]>;
  generosList:any=[];

  GenerosMap:Map<number, string> = new Map()

  constructor(private service:ShowPeliculasService, private generoService:ApiGeneroService) { }

  ngOnInit(): void {
    this.peliculasList$ = this.service.getPeliculasList();
    this.generosList$ = this.generoService.getGenerosList();

    this.mapearGeneroLista();

    console.log(this.generosList$);
  }

  mapearGeneroLista() {
    this.generoService.getGenerosList().subscribe(data => {
      this.generosList = data;

      for(let i = 0; i < data.length; i++)
      {
        this.GenerosMap.set(this.generosList[i].id, this.generosList[i].name);
      }
    })
  }

}
