import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';
import { Produto } from '../model/produto.model';
import { Store, select } from '@ngrx/store';
import { User } from '../model/user.model';
import { AppReducer } from '../store/reducers/app.reducer';
import * as ProdutoAction from '../store/actions/produto.action';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  produtos: Produto[];

  isLoading: boolean = false;

  constructor(
    private readonly produtoService: ProdutoService,
    private readonly store: Store<AppReducer>
    ) { }

  ngOnInit(): void {
    this.store.pipe(select('produtos')).subscribe(produtos => {
      this.isLoading = produtos.isLoading;
      this.produtos = produtos.produtos;
    })
    this.store.dispatch(ProdutoAction.produtoStart());

  }

}
