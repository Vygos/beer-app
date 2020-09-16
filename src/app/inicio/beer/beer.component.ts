import { Component, OnInit, Input } from '@angular/core';
import { Produto } from 'src/app/model/produto.model';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppReducer } from 'src/app/store/reducers/app.reducer';
import * as CarrinhoAction from 'src/app/store/actions/carrinho.action';
import { trigger, state, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ transform: 'translateY(50px)', opacity: 0}),
        animate(1000)
      ])
    ])
  ]
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
