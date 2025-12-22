import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
    return next(req).pipe(
        catchError((error) => {
            console.error('API Error:', error);
            // You could add logic here to show a toast message or redirect on 401
            return throwError(() => error);
        })
    );
};
