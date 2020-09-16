import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/produto.model';
import { Store, select } from '@ngrx/store';
import { AppReducer } from '../store/reducers/app.reducer';
import * as ProdutoAction from '../store/actions/produto.action';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit{

  produtos: Produto[];

  isLoading: boolean = false;
  

  constructor(
    private readonly store: Store<AppReducer>,
    ) { }

  ngOnInit(): void {
    
    this.store.dispatch(ProdutoAction.produtoStart());
    this.store.pipe(select('produtos')).subscribe(produtos => {
      this.isLoading = produtos.isLoading;
      this.produtos = produtos.produtos;
    })

  }

}
