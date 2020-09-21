import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnderecoCep } from '../model/endereco-cep.model';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  protected END_POINT = "https://viacep.com.br/ws/" 

  constructor(private readonly http: HttpClient) { }

  consultar(cep: string): Observable<EnderecoCep> {
    return this.http.get<EnderecoCep>(`${this.END_POINT}/${cep}/json`)
  }
}
