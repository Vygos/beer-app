import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { InicioModule } from './inicio/inicio.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSidenavModule} from '@angular/material/sidenav';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './store/reducers/auth.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/effects/auth.effects';
import { SpinnerLoadingComponent } from './shared/others/spinner-loading/spinner-loading.component';
import { appReducer } from './store/reducers/app.reducer';
import { ProdutoEffects } from './store/effects/produto.effects';
import { MatBadgeModule } from '@angular/material/badge'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatToolbarModule,
    HttpClientModule,
    InicioModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatBadgeModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([AuthEffects, ProdutoEffects]),
    StoreDevtoolsModule.instrument({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
