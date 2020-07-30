import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/app/model/usuario.model';
import { CPF_MASK, TEL_MASK } from 'src/app/shared/mask/mask';

@Component({
  selector: 'app-usuario-card',
  templateUrl: './usuario-card.component.html',
  styleUrls: ['./usuario-card.component.scss']
})
export class UsuarioCardComponent implements OnInit {

  cpfMask = CPF_MASK;
  telMask = TEL_MASK;

  @Input() usuario: Usuario;

  constructor() { }

  ngOnInit(): void {
  }

}
