import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EnderecoForm } from './endereco/endereco.form';

@Component({
  selector: 'app-finalizar-compra',
  templateUrl: './finalizar-compra.component.html',
  styleUrls: ['./finalizar-compra.component.scss']
})
export class FinalizarCompraComponent implements OnInit {

  enderecoForm: EnderecoForm;

  constructor(private readonly fb: FormBuilder) {
    this.enderecoForm = new EnderecoForm(this.fb);
  }
  
  ngOnInit(): void {
  }

}
