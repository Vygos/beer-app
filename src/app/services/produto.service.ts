import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../model/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private endpoint = 'http://localhost:3000'
  constructor(private readonly http: HttpClient) { }

  buscar(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.endpoint}/produtos`);
  }

  buscarPorId(id: number) {
    return this.http.get<Produto>(`${this.endpoint}/produtos/${id}`)
  }
}
