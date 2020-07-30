import { Component, OnInit, Input } from '@angular/core';
import { ControlContainer, Validators, FormControl, Form } from '@angular/forms';

@Component({
  selector: '[validation]',
  template:`{{ this.error }}` ,
  styleUrls: ['./validation.component.scss']
})
export class ValidationComponent implements OnInit {

  @Input() controlName;

  @Input() msg= {}

  private formControl: FormControl;

  private _error;

  constructor(private readonly controlContainer: ControlContainer) { }

  ngOnInit(): void {
    this.formControl = this.controlContainer.control.get(this.controlName) as FormControl;
    this.validate();
    this.onStatusChange();
  }

  validate() {
    this.formControl
      .valueChanges.subscribe(() => {
        if(this.formControl.errors) {
          const { errors } = this.formControl;
          for (const erro in errors) {
            if (errors.hasOwnProperty(erro)) {
              console.log("property", erro)
              console.log("erro", this.msg[erro])
              this._error = this.msg[erro];
            }
          }
        } else {
          this._error = null;
        }
      })

  }

  onStatusChange() {
    this.formControl
      .statusChanges.subscribe(() => {
        if(this.formControl.errors) {
          const { errors } = this.formControl;
          for (const erro in errors) {
            if (errors.hasOwnProperty(erro)) {
              console.log("erro", this.msg[erro])
              this._error = this.msg[erro];
            }
          }
        }
      })
  }

  get error() {
    return this._error;
  }
}
