import { createAction, props } from "@ngrx/store";
import { Produto } from 'src/app/model/produto.model';
import { Item } from 'src/app/model/item.model';

export const ADD_PRODUTO = '[Carrinho] Add Produto';
export const DELETE_PRODUTO = '[Carrinho] Delete Produto'
export const AUMENTAR_QUANTIDADE = '[Carrinho] Aumentar Quantidade';

export const addProduto = createAction(ADD_PRODUTO, props<{item: Item}>());
export const deleteProduto = createAction(DELETE_PRODUTO, props<{index: number}>());
export const aumentarQuantidade = createAction(AUMENTAR_QUANTIDADE, props<{numero: number, index: number}>());

