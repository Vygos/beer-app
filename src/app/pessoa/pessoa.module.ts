import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoaRoutingModule } from './pessoa-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ValidationModule } from '../shared/validation/validation.module';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { InputFileModule } from '../shared/input/input-file/input-file.module';
import {MatSnackBarModule} from '@angular/material/snack-bar'


const options: () => Partial<IConfig> = () => {
  return {

  };
};

@NgModule({
  declarations: [PessoaCadastroComponent],
  exports: [PessoaCadastroComponent],
  imports: [
    CommonModule,
    PessoaRoutingModule,
    InputFileModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    ValidationModule,
    MatSnackBarModule,
    NgxMaskModule.forRoot(options)
  ]
})
export class PessoaModule { }
