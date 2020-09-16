import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProdutoService } from 'src/app/services/produto.service';
import * as ProdutoAction from '../actions/produto.action';
import { mergeMap, map, delay, publishReplay, refCount, catchError } from 'rxjs/operators';
import { Produto } from 'src/app/model/produto.model';
import { of } from 'rxjs';

@Injectable()
export class ProdutoEffects {

    produtoGet$ = createEffect(() => this.actions$.pipe(
        ofType(ProdutoAction.produtoStart),
        mergeMap(() => {
            return this.produtoService.buscar()
                .pipe(
                    map((produtos: Produto[]) => {

                        return ProdutoAction.produtoList({produtos})
                    }),
                    catchError(() => of({type: ''})),
                )
        })
    ));


    constructor(
        private readonly actions$: Actions,
        private readonly produtoService: ProdutoService
    ) {}
}