import { Produto } from 'src/app/model/produto.model';
import { createReducer, on } from '@ngrx/store';
import * as CarrinhoAction from '../actions/carrinho.action';
import { Item } from 'src/app/model/item.model';
import { act } from '@ngrx/effects';
import { ActivationEnd } from '@angular/router';

export interface State {
    items: Item[]
}

const initialState: State = {
    items: []
}

export function carrinhoReducer(state, action) {
    return _carrinhoReducer(state, action);
}

const _carrinhoReducer = createReducer(initialState, 
    on(
        CarrinhoAction.addProduto,  
        (state: State, {item}) => ({items: [...state.items,  item]})
    ),
    on(CarrinhoAction.aumentarQuantidade, (state, action) => {

        return {items: [...state.items.map((item, index) => {
            if(index === action.index) {
                return {...item, quantidade: action.numero}
            }
            return item;
        })]}
    }),
    on(CarrinhoAction.deleteProduto, (state, action) => {
        return {items: [...state.items.filter((item, index) => index !== action.index)]}
    })
)
