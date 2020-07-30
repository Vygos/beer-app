import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item.model';
import { Store, select } from '@ngrx/store';
import { AppReducer } from 'src/app/store/reducers/app.reducer';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {

  items: Item[];

  valorTotal: number;

  constructor(private readonly store: Store<AppReducer>) { }

  ngOnInit(): void {
    this.store.pipe(select('carrinho'))
      .subscribe(carrinho => {
        this.items = carrinho.items;
      })
  }

  getValorTotal() {
    let valorTotal = 0;
  
    this.items.forEach(item => {
      valorTotal += item.quantidade * item.produto.valor;
      this.valorTotal = valorTotal;
    })
    return this.valorTotal;
  }

}
