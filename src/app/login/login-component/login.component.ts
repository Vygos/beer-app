import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ControlContainer } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PessoaService } from 'src/app/services/pessoa.service';
import { Validation } from 'src/app/shared/validation/async-validation';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { slider } from '../../shared/animations/slider-animation';
import { AppReducer } from 'src/app/store/reducers/app.reducer';
import { Store } from '@ngrx/store';
import * as AuthAction from 'src/app/store/actions/auth.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide: boolean = true;

  form: FormGroup

  showSenha: boolean = false;

  open: boolean = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private pessoaService: PessoaService,
    private router: Router,
    private store: Store<AppReducer>
  ) { }

  ngOnInit(): void {

    this.open = true;

    this.form = this.fb.group({
      email: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: Validation.asyncEmail(this.pessoaService)
      }),
      senha: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });

    
  }

  pesquisar() {
    const { value } = this.form.get('email');

    if (value) {
      this.pessoaService.pesquisar(value)
        .subscribe(users => {
          this.showSenha = users.some(user => user.email === value);
        })
    }
  }

  onSubmit() {
    const { email, senha } = this.form.value;

    this.store.dispatch(AuthAction.authUser({user: email, password: senha}))
  }


}
