import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, delay, map, tap } from 'rxjs/operators';
import { SpinnerLoadingService } from './shared/others/spinner-loading/spinner-loading.service';

@Injectable()
export class RouteInterceptor implements HttpInterceptor {

  constructor(private readonly spinnerService: SpinnerLoadingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.spinnerService.open();
    return next.handle(request).pipe(
      delay(2000),
      tap(() => this.spinnerService.close())
    )
  }
}
