import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ConfigService } from 'src/app/service/config/config.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

 //host1: string = 'https://cors-anywhere.herokuapp.com/';
 //host2: string = 'http://api.contratti.immobiliz.com/api/auth/login';

 api_url: string;
 headers = new HttpHeaders().set('Content-Type', 'application/json');

 constructor(config: ConfigService, public router: Router, private httpClient: HttpClient, handler: HttpBackend) {
   this.api_url = config.API_URL;
   /************************************************/
   /**/ /* this is to avoid interceptor catch */  /**/
   /**/                                          /**/
   /**/ this.httpClient = new HttpClient(handler); /**/
   /**/                                          /**/
   /************************************************/
 }

 login(username: string, password: string): Promise<any> {

   return this.httpClient.post<any>(`${this.api_url}/auth/signin`, { username, password }).toPromise();
 }

  getAccessToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    const authToken = localStorage.getItem('token');
    return (authToken !== null) ? true : false;
  }

  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
