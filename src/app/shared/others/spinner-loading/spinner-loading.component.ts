import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'spinner-loading',
  template: '<mat-spinner [diameter]="diameter" ></mat-spinner>',
  styleUrls: ['./spinner-loading.component.scss']
})
export class SpinnerLoadingComponent implements OnInit {

  @Input() diameter: number;

  @Input() indeterminate;

  constructor() { }

  ngOnInit(): void {
  }

}
