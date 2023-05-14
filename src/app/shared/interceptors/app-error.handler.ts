import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { TimeoutError } from 'rxjs';
import { ToastService } from '../services/toast/toast.service';
import { AppInjector } from 'src/app/app.module';

@Injectable({
  providedIn: 'root'
  })
export class AppErrorHandler implements ErrorHandler {

    constructor(
      private zone: NgZone,
      ) {}

    handleError(error: string): void {
      const toast = AppInjector.get(ToastService);

      this.zone.run(() => {
        toast.error(error);
      })
    }

}

export const AppErrorInterceptorProvider = {
    provide: ErrorHandler,
    useClass: AppErrorHandler
};
