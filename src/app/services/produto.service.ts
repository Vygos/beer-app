import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../model/produto.model';
import { publishReplay, refCount, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  constructor(private readonly http: HttpClient) { }

  buscar(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`/produtos`);
  }

  buscarPorId(id: number) {
    return this.http.get<Produto>(`/produtos/${id}`)
  }
}
