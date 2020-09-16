import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BeerComponent } from './beer/beer.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SpinnerLoadingModule } from '../shared/others/spinner-loading/spinner-loading.module';
import { BeerShopComponent } from './beer-shop/beer-shop.component';
import { InicioRoutingModule } from './inicio-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { CarrinhoItemComponent } from './carrinho-item/carrinho-item.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FinalizarCompraComponent } from './finalizar-compra/finalizar-compra.component';
import {MatStepperModule} from '@angular/material/stepper';
import { EnderecoComponent } from './finalizar-compra/endereco/endereco.component';
import { ValidationModule } from '../shared/validation/validation.module';
import {PortalModule} from '@angular/cdk/portal'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'


@NgModule({
  exports: [
    BeerComponent
  ],
  declarations: [
    InicioComponent, 
    BeerComponent, BeerShopComponent, CarrinhoComponent, CarrinhoItemComponent, FinalizarCompraComponent, EnderecoComponent
  ]
  ,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    SpinnerLoadingModule,
    InicioRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatStepperModule,
    ValidationModule,
    PortalModule,
    MatProgressSpinnerModule
  ]
})
export class InicioModule { }
