import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item.model';
import { Store, select } from '@ngrx/store';
import { AppReducer } from 'src/app/store/reducers/app.reducer';
import { User } from 'src/app/model/user.model';
import { Router, RouterModule } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { redirectRoute } from 'src/app/store/actions/redirect.action';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {

  items: Item[];

  valorTotal: number;

  userAuth: User;

  constructor(
    private readonly store: Store<AppReducer>,
    private readonly router: Router,
    ) { }

  ngOnInit(): void {
    this.store.pipe(select('carrinho'))
      .subscribe(carrinho => {
        this.items = carrinho.items;
      })

    this.store.pipe(select('userAuth')).subscribe(userAuth => {
        this.userAuth = userAuth.user;
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

  finalizar() {
    if (this.userAuth) {
      this.router.navigate(['/finalizar-compra']);
      return;
    }

    this.store.dispatch(redirectRoute({url: 'finalizar-compra'}))
    this.router.navigate(['/login']);
  }

}
