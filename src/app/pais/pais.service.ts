import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private paises = 'src/paises_datos.json';

constructor(private http: HttpClient) { }

  getPaises():Observable<any> {
  return this.http.get<any[]>(this.paises);
  }
}
