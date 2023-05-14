import { StorageService } from './../services/storage/storage.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from '../services/toast/toast.service';

@Injectable()

/**
 * Class to catch all kind of http error send from the server
 */
 export class ErrorInterceptor implements HttpInterceptor {


    constructor(
      private router: Router,
      private toatService: ToastService,
      private route: ActivatedRoute,
      private storageService: StorageService
      ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(


            catchError((error) => {

              if (error instanceof HttpErrorResponse) {

                // Check if its an error message
                if (error.status === 400) {
                  const errorMsgFromServer = error?.error?.error;

                  if (errorMsgFromServer) {
                    this.toatService.error(errorMsgFromServer);
                  }
                }

                // If no token is found
                if (error.status === 401 || error.status === 403) {

                  // clear storage
                  this.storageService.clearAll();

                  // send user to the public page
                  this.router.navigate(['/public']);
                }

                // Check if its an error message
                if (error.status === 500) {
                  this.toatService.error('Something went wrong');
                }
              }
              throw error;
            })

        );
    }

}

export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
};
