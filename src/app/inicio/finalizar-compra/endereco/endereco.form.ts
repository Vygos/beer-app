import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

export class EnderecoForm {

    form: FormGroup

    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            cep: new FormControl(null, [Validators.required]),
            logradouro: new FormControl(null, Validators.required),
            bairro: new FormControl(null, Validators.required),
            localidade: new FormControl(null, Validators.required),
            uf: new FormControl(null, Validators.required)
        })
    }
}