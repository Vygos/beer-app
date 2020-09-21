import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EnderecoCep } from 'src/app/model/endereco-cep.model';

export class EnderecoForm {

    form: FormGroup

    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            cep: new FormControl(null, [Validators.required]),
            logradouro: new FormControl({value: null, disable: true}, Validators.required),
            bairro: new FormControl({value: null, disable: true}, Validators.required),
            localidade: new FormControl({value: null, disable: true}, Validators.required),
            uf: new FormControl({value: null, disable: true}, Validators.required)
        })
    }

    preencherCep(endereco: EnderecoCep) {
        this.form.get("logradouro").setValue(endereco.logradouro)
        this.form.get("bairro").setValue(endereco.bairro)
        this.form.get("localidade").setValue(endereco.localidade)
        this.form.get("uf").setValue(endereco.uf)
    }
}