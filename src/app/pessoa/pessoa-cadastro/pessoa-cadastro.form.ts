import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

export class PessoaCadastroForm {

    _pessoaForm: FormGroup;

    constructor(private formBuilder: FormBuilder) { 
        this._pessoaForm = formBuilder.group({
            nome: new FormControl(null, [Validators.required]),
            cpf: new FormControl(null, [Validators.required]),
            telefone: new FormControl(null, [Validators.required]),
            email: new FormControl(null, [Validators.required, Validators.email]),
            dataNascimento: new FormControl(null, [Validators.required]),
            foto: new FormControl(null, [Validators.required]),
        })
    }


    get pessoaForm() {
        return this._pessoaForm;
    }

}