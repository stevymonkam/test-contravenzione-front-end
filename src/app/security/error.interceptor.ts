import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ConfigService } from '../service/config/config.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private configService: ConfigService, public router: Router) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      if (err.status === 401) {
        // auto logout if 401 response returned from api
        this.router.navigate(['/login']);
      }
      if (err.status === 403) {
        // auto logout if 401 response returned from api
        this.router.navigate(['/login']);
      }
      else {
        if (err.status === 400) {
          console.log(err);
          //this.configService.showToast('top', 'right',err.error.message, 'danger');
        }
      }
      const error = err.error.message || err.statusText;
      return throwError(error);
    }));
  }
}
