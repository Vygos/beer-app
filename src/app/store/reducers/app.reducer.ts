import *  as fromAuthReducer from './auth.reducer';
import *  as fromProdutoReducer from './produto.reducer';
import *  as fromCarrinhoReducer from './carrinho.reducer';

export interface AppReducer {
    userAuth: fromAuthReducer.State
    produtos: fromProdutoReducer.State
    carrinho: fromCarrinhoReducer.State
}

export const appReducer = {
    userAuth: fromAuthReducer.authReducer,
    produtos: fromProdutoReducer.produtoReducer,
    carrinho: fromCarrinhoReducer.carrinhoReducer
}