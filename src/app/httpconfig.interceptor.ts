import { ShowErrorService } from './shared/components/show-error/show-error.service';
import { Injectable, Injector } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError, take } from 'rxjs/operators';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor{
    constructor(private injector: Injector){}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const errorService = this.injector.get(ShowErrorService);

        // const token: string = localStorage.getItem('token');

        // if (token) {
        //     request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
        // }

        // if (!request.headers.has('Content-Type')) {
        //     request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        // }

        // request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

        return next.handle(request).pipe(
            catchError((error: HttpErrorResponse) => {
                let data = {};
                data = {
                    reason: error && error.error.reason ? error.error.reason : '',
                    status: error.status
                };
                errorService.show();
                return throwError(error);
            })
            
            );
    }
    
    
}