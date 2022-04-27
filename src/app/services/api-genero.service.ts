import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiGeneroService {

  readonly generosAPIUrl = "https://localhost:49159";

  constructor(private http:HttpClient) { }

  getGenerosList():Observable<any[]> {
    return this.http.get<any>(this.generosAPIUrl + '/Genero');
  }

  addInspection(data:any) {
    return this.http.post(this.generosAPIUrl + '/Genero/AddGenero', data);
  }

  updateInspection(id:number|string, data:any) {
    return this.http.put(this.generosAPIUrl + `/Genero/${id}`, data);
  }

  deleteInspection(id:number|string) {
    return this.http.delete(this.generosAPIUrl + `/Genero/${id}`);
  }

}
