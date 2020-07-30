import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/produto.model';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from 'src/app/services/produto.service';
import { Item } from 'src/app/model/item.model';
import { AppReducer } from 'src/app/store/reducers/app.reducer';
import { Store, select } from '@ngrx/store';
import { addProduto } from 'src/app/store/actions/carrinho.action';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as AuthReducer from '../../store/reducers/auth.reducer';

@Component({
  selector: 'app-beer-shop',
  templateUrl: './beer-shop.component.html',
  styleUrls: ['./beer-shop.component.scss']
})
export class BeerShopComponent implements OnInit {

  produto: Produto;

  quantidade: number = 1;

  private userAuth: AuthReducer.State;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly produtoService: ProdutoService,
    private readonly store: Store<AppReducer>,
    private readonly router: Router,
    private readonly snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      const id = param['id'];

      this.produtoService.buscarPorId(id).subscribe(produto => {
        this.produto = produto;
      })
    })

    this.store.pipe(select('userAuth'))
      .subscribe((user: AuthReducer.State) => {
      this.userAuth = user;
    })
  }


  comprar(produto: Produto) {
    const item: Item = {
      produto,
      quantidade: this.quantidade
    }

    this.store.dispatch(addProduto({item}));

    if (this.userAuth.user) {
      this.router.navigate(['/carrinho']);
      this.snackBar.open("Item adicionado ao carrinho", "", {duration: 3000});
      return;
    }

    this.router.navigate(['/login']);

  }

}
