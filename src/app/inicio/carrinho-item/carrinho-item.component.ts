import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/model/item.model';
import { Store } from '@ngrx/store';
import { AppReducer } from 'src/app/store/reducers/app.reducer';
import { aumentarQuantidade, deleteProduto } from 'src/app/store/actions/carrinho.action';

@Component({
  selector: 'app-carrinho-item',
  templateUrl: './carrinho-item.component.html',
  styleUrls: ['./carrinho-item.component.scss']
})
export class CarrinhoItemComponent implements OnInit {

  @Input() item: Item;

  @Input() index: number;

  constructor(private readonly store: Store<AppReducer>) { }

  ngOnInit(): void {
    
  }

  calcularItem(item: Item) {
    return item.quantidade * item.produto.valor;
  }

  aumentarQuantidade($event) {
    this.store.dispatch(aumentarQuantidade({numero: $event.target.value, index: this.index}))
  }

  excluirItem(index) {
    this.store.dispatch(deleteProduto({index}));
  }

}
