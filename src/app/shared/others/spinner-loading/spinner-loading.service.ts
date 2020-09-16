import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import {ComponentRef, Injectable } from '@angular/core';
import { SpinnerLoadingComponent } from './spinner-loading.component';
import { SpinnerLoadingModule } from './spinner-loading.module';

@Injectable({
  providedIn: SpinnerLoadingModule
})
export class SpinnerLoadingService {


  private _currentOverlay: ComponentRef<SpinnerLoadingComponent>;

  private isOpen = false;

  constructor(private readonly _overlay: Overlay) { }


  open() {

    if (!this.isOpen) {
      const overlayConfig = new OverlayConfig();
      const overlayRef = this._overlay.position().global();
      overlayConfig.positionStrategy = overlayRef.top();
  
      const overlay = this._overlay.create(overlayConfig);
      this.currentOverlay = overlay.attach(new ComponentPortal(SpinnerLoadingComponent));
      this.isOpen = true;
    } else {
      this.close();
    }
  }


  close() {
    this.isOpen = false;
    this.currentOverlay.destroy();
  }

  get currentOverlay() {
    return this._currentOverlay;
  }

  set currentOverlay(spinnerLoading: ComponentRef<SpinnerLoadingComponent>) {
    this._currentOverlay = spinnerLoading;
  }
}
