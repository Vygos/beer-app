import { Component, OnInit, Input } from '@angular/core';
import { ControlContainer, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.scss']
})
export class InputFileComponent implements OnInit {

  @Input() label: string;

  @Input() controlName: string;

  formControl: FormControl;

  

  constructor(private readonly controlContainer: ControlContainer) {}

  ngOnInit(): void {
    this.formControl = this.controlContainer.control.get(this.controlName) as FormControl;
  }

  action(event) {
    const [file] = event.target.files;
    this.formControl.setValue(file);
  }
}
