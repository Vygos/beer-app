import { Component, OnInit, Input } from '@angular/core';
import { Produto } from 'src/app/model/produto.model';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppReducer } from 'src/app/store/reducers/app.reducer';
import * as CarrinhoAction from 'src/app/store/actions/carrinho.action';


@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss']
})
export class BeerComponent implements OnInit {

  @Input() produto: Produto;

  constructor(
    private readonly router: Router,
    private readonly store: Store<AppReducer>
    ) { }

  ngOnInit(): void {
  }

  comprar(id: number) {
    this.router.navigate([`/produto/${id}`]);
  }
}
