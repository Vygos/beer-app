import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario.model';
import { User } from '../model/user.model';

declare const require;



@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private config = require('../../endpoint.json');

  private endpoint = 'http://localhost:8080/api/v1'

  constructor(private readonly http: HttpClient) { }

  listar(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${this.endpoint}/pessoa`);
  }

  salvar(pessoa): Observable<Usuario> {
    return this.http.post<any>(`${this.endpoint}/pessoa`, pessoa);
  }

  pesquisar(email: string) : Observable<any[]> {
    const params = new HttpParams().append("email", email);
    return this.http.get<User[]>(`${this.config.endpoint}/users`, { params });
  }

  salvarFoto(foto, id) {
    const formData = new FormData();
    formData.append('file', foto);
    return this.http.post(`${this.endpoint}/pessoa/${id}/upload/foto`, formData)
  }

}