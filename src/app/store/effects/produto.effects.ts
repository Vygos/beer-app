import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProdutoService } from 'src/app/services/produto.service';
import * as ProdutoAction from '../actions/produto.action';
import { mergeMap, map, delay, publishReplay, refCount } from 'rxjs/operators';
import { Produto } from 'src/app/model/produto.model';

@Injectable()
export class ProdutoEffects {

    produtoGet$ = createEffect(() => this.actions$.pipe(
        ofType(ProdutoAction.PRODUTO),
        mergeMap(() => {
            return this.produtoService.buscar()
                .pipe(
                    map((produtos: Produto[]) => {

                        return ProdutoAction.produtoList({produtos})
                    }),
                    delay(2000)
                )
        })
    ));


    constructor(
        private readonly actions$: Actions,
        private readonly produtoService: ProdutoService
    ) {}
}