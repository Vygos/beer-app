import { Component, Input, OnInit } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';
import { CEP_MASK } from 'src/app/shared/mask/mask';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.scss']
})
export class EnderecoComponent implements OnInit {

  cepMask = CEP_MASK;

  @Input()
  enderecoForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    console.log("FORM", this.enderecoForm);
  }

}
