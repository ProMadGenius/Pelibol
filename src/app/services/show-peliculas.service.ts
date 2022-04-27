import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowPeliculasService {

  readonly peliculasAPIUrl = "https://localhost:49157";

  constructor(private http:HttpClient) { }

  getPeliculasList():Observable<any[]> {
    return this.http.get<any>(this.peliculasAPIUrl + '/Peliculas');
  }

  addInspection(data:any) {
    return this.http.post(this.peliculasAPIUrl + '/inspections', data);
  }

  updateInspection(id:number|string, data:any) {
    return this.http.put(this.peliculasAPIUrl + `/inspections/${id}`, data);
  }

  deleteInspection(id:number|string) {
    return this.http.delete(this.peliculasAPIUrl + `/inspections/${id}`);
  }

}
