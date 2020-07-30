import { createAction, props } from '@ngrx/store';
import { Produto } from 'src/app/model/produto.model';


export const PRODUTO = '[Inicio] Produto'
export const PRODUTO_LIST = '[Inicio] Produto Success';


export const produtoStart = createAction(PRODUTO);
export const produtoList = createAction(PRODUTO_LIST, props<{produtos: Produto[]}>());