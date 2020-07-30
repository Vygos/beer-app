import { Component, OnInit } from '@angular/core';
import { PessoaService } from 'src/app/services/pessoa.service';
import { Usuario } from 'src/app/model/usuario.model';

@Component({
  selector: 'app-listagem-usuario',
  templateUrl: './listagem-usuario.component.html',
  styleUrls: ['./listagem-usuario.component.scss']
})
export class ListagemUsuarioComponent implements OnInit {

  usuarios: Usuario[];

  constructor(private pessoaService: PessoaService) { }

  ngOnInit(): void {
    this.pessoaService.listar().subscribe((response: Usuario[]) => {
      this.usuarios = response;
    })
  }

}
