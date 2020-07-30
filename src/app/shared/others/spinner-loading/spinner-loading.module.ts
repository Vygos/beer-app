import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerLoadingComponent } from './spinner-loading.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'


@NgModule({
  declarations: [SpinnerLoadingComponent],
  exports: [SpinnerLoadingComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ]
})
export class SpinnerLoadingModule { }
