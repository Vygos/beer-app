import { createReducer, on } from '@ngrx/store';
import { Produto } from 'src/app/model/produto.model';
import { LOGIN } from '../actions/auth.action';
import * as ProdutoAction from '../actions/produto.action';


export interface State {
    produtos: Produto[],
    erro: string,
    isLoading
}

const initialState: State = {
    produtos: null,
    erro: null,
    isLoading: false
}

export function produtoReducer (action, state){
    return _produtoReducer(action, state);
}

const _produtoReducer = createReducer(initialState,
    on(ProdutoAction.produtoStart, (state) => ({...state, isLoading: true})),
    on(ProdutoAction.produtoList, (state, {produtos}) => ({
        ...state,
        produtos: [...produtos],
        isLoading: false
    }))
)