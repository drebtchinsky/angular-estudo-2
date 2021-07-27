import { TokenService } from './token.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const API = environment.API_URL;

@Injectable()
export class AutenticacaoInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.tokenService.possuiToken()) {
      const token = this.tokenService.retornaToken();
      const headers = new HttpHeaders().append('x-access-token', token);
      const url = `${API}/${request.url}`;
      request = request.clone({ headers, url });
    }
    return next.handle(request);
  }
}
