import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage/storage.service';



@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(
      private storage: StorageService
      ) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (request.url.includes('login')) {
          return next.handle(request);
        }

        let token = this.storage.getItem('token');

        if (token) {
            request = request.clone({
                setHeaders: {
                    'x-access-token': `${token}`
                }
            });
        }

        return next.handle(request);
    }
}

export const JwtInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true,
    deps: [StorageService]
};
