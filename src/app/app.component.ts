import { Component } from '@angular/core';
import { AppReducer } from './store/reducers/app.reducer';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'beer-app';

  numeroItens: number;

  constructor(private readonly store: Store<AppReducer>) {}

  ngOnInit(): void {
    this.store.select('carrinho').subscribe(carrinho => {
      this.numeroItens = carrinho.items.length;
    })
  }
}
