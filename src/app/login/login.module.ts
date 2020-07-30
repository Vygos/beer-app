import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './login-component/login.component';
import { ValidationComponent } from 'src/app/shared/validation/validation.component';
import { PessoaService } from 'src/app/services/pessoa.service';
import { ValidationModule } from '../shared/validation/validation.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PessoaModule } from '../pessoa/pessoa.module';
import { LoginRoutingModule } from './login-routing.module';





@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    ValidationModule
  ],
  providers: [PessoaService]
})
export class LoginModule { }
