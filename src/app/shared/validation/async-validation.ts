import { Injectable, Directive } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of, timer } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { FormControl, NG_ASYNC_VALIDATORS, AbstractControl } from '@angular/forms';
import { PessoaService } from 'src/app/services/pessoa.service';


export class Validation{

    private ENDPOINT = 'http://localhost:3000'

    constructor() {}

    static asyncEmail(pessoaService: PessoaService, time: number = 500){
        return (control: AbstractControl) => {
            if (control.value) {
                return of({email: false}).pipe(switchMap(() => pessoaService.pesquisar(control.value)),
                        map(response => {
                                const hasEmail = response.some(user => user.email === control.value);
                                console.log("HAS", hasEmail)
                                return hasEmail ? null : {email: true};
                            })
                        )
            }

            return of({email: true}).pipe(map(resp => ({email: true})))

        }
    }

    static email(control: AbstractControl) {
        return control.value ? {email: true} : null;
    }
}