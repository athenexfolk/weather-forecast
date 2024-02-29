import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

export const keyInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.startsWith(environment.baseUrl)) {
    const newReq = req.clone({
      params: req.params.append('key', environment.apiKey),
    });
    return next(newReq);
  }
  return next(req);
};
