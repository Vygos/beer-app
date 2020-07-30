import { Routes, RouterModule } from "@angular/router";
import { InicioComponent } from './inicio.component';
import { BeerShopComponent} from './beer-shop/beer-shop.component';
import { NgModule } from '@angular/core';
import { CarrinhoComponent } from './carrinho/carrinho.component';

const routes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'produto/:id', component: BeerShopComponent},
    {path: 'carrinho', component: CarrinhoComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InicioRoutingModule {}