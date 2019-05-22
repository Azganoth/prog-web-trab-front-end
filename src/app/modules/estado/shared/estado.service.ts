import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estado } from './estado.model';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  url = 'http://localhost:8080/estados';

  constructor(
    private http: HttpClient
  ) { }

  insert(estado: Estado): Promise<any> {
    return this.http.post(this.url, estado).toPromise();
  }

  find(filter?: any): Promise<Estado[]> {
    let url = this.url;
    if (filter && filter.nome) {
      url += `/filtro?nome=${filter.nome}`;
    }
    return this.http.get<Estado[]>(url).toPromise();
  }

  findById(id: number): Promise<Estado> {
    return this.http.get<Estado>(`${this.url}/${id}`).toPromise();
  }

  update(estado: Estado): Promise<any> {
    return this.http.put(`${this.url}/${estado.id}`, estado).toPromise();
  }

  deleteById(id: number): Promise<void> {
    return this.http.delete(`${this.url}/${id}`).toPromise().then(() => null);
  }

}
