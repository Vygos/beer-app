import { Component, Input, OnInit } from '@angular/core';
import { EnderecoCep } from 'src/app/model/endereco-cep.model';
import { CepService } from 'src/app/services/cep.service';
import { CEP_MASK } from 'src/app/shared/mask/mask';
import { EnderecoForm } from './endereco.form';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.scss']
})
export class EnderecoComponent implements OnInit {

  cepMask = CEP_MASK;

  @Input()
  enderecoForm: EnderecoForm;

  constructor(private readonly cepService: CepService) { }

  ngOnInit(): void {
    console.log("FORM", this.enderecoForm);
  }

  consultarCep() {
    const { value, valid } = this.enderecoForm.form.get("cep")
    if (value && valid) {
      this.cepService.consultar(value).subscribe((response: EnderecoCep) => {
        this.enderecoForm.preencherCep(response);
      });
    }
  }

}
