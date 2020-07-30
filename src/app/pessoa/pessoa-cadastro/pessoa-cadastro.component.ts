import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PessoaCadastroForm } from './pessoa-cadastro.form';
import { TEL_MASK, CPF_MASK } from 'src/app/shared/mask/mask';
import { PessoaService } from 'src/app/services/pessoa.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.scss']
})
export class PessoaCadastroComponent implements OnInit {

  telMask = TEL_MASK;
  cpfMask = CPF_MASK;

  pessoaForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private pessoaService: PessoaService,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.pessoaForm = new PessoaCadastroForm(this.fb).pessoaForm;
  }

  onSubmit() {
    const foto = this.pessoaForm.value.foto;
    this.pessoaForm.value.foto = null;

    this.pessoaService.salvar(this.pessoaForm.value)
      .subscribe(response => {
        this.pessoaService.salvarFoto(foto, response.id).subscribe(response2 => {
          this.pessoaForm.reset()
          this.pessoaForm.clearValidators()
          this.snackBar.open('Usuario Cadastrado com Sucesso',"", {
            duration: 2000
          })
        })
      }, (err: Error) => {
        this.snackBar.open('Erro ao cadastrar usuario', err.name, {
          duration: 2000
        })
      })
  }
}
