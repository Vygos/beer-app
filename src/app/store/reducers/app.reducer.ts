import *  as fromAuthReducer from './auth.reducer';
import *  as fromProdutoReducer from './produto.reducer';
import *  as fromCarrinhoReducer from './carrinho.reducer';
import *  as fromRedirectReducer from './redirect.reducer';

export interface AppReducer {
    userAuth: fromAuthReducer.State
    produtos: fromProdutoReducer.State
    carrinho: fromCarrinhoReducer.State
    redirectUrl: fromRedirectReducer.State
}

export const appReducer = {
    userAuth: fromAuthReducer.authReducer,
    produtos: fromProdutoReducer.produtoReducer,
    carrinho: fromCarrinhoReducer.carrinhoReducer,
    redirectUrl: fromRedirectReducer.redirectReducer
}