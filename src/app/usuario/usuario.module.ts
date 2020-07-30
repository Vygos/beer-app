import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemUsuarioComponent } from './listagem-usuario/listagem-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from '../login/login-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ValidationModule } from '../shared/validation/validation.module';
import { UsuarioCardComponent } from './usuario-card/usuario-card.component';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { NgxMaskModule, IConfig } from 'ngx-mask';

const options: () => Partial<IConfig> = () => {
  return {

  };
};;


@NgModule({
  declarations: [ListagemUsuarioComponent, UsuarioCardComponent],
  exports: [UsuarioCardComponent],
  imports: [
    CommonModule,
    FormsModule,
    UsuarioRoutingModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    ValidationModule,
    NgxMaskModule.forRoot(options)
  ]
})
export class UsuarioModule { }
