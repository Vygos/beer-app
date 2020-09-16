import { Component, Input, OnInit } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.scss']
})
export class EnderecoComponent implements OnInit {

  @Input()
  enderecoForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    console.log("FORM", this.enderecoForm);
  }

}
