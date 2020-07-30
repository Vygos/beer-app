import { Actions, ofType, Effect, createEffect } from '@ngrx/effects'
import * as AuthAction from '../actions/auth.action'
import { mergeMap, switchMap, map, catchError, delay, tap } from 'rxjs/operators'
import { of } from 'rxjs'
import { Injectable } from '@angular/core'
import { User } from 'src/app/model/user.model'
import { PessoaService } from 'src/app/services/pessoa.service'
import { Router } from '@angular/router'


@Injectable()
export class AuthEffects {

    
    authUser$ = createEffect(() => this.actions$.pipe(
        ofType(AuthAction.LOGIN),
        switchMap((auth: {user: string, password: string}) => {
            return this.pessoaService.pesquisar(auth.user)
                .pipe(
                    map((usuario: User[]) => {
                        const [ user ] = usuario;
                        return AuthAction.authSuccesful(new User({nome: user.nome, email: user.email}))
                    }),
                    catchError(() => of({type: AuthAction.LOGIN, payload: {}})),
                    delay(2000)
                )
        })
    ))

    navigateUser$ = createEffect(() => this.actions$.pipe(
        ofType(AuthAction.LOGIN_AUTH),
        tap(() => this.router.navigate(['/']))
    ), {dispatch: false})

    constructor(
        private readonly actions$: Actions,
        private readonly pessoaService: PessoaService,
        private readonly router: Router
    ) { }
}