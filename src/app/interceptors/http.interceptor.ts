import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable, catchError, tap, throwError } from "rxjs";
import { Injectable } from "@angular/core";
import { AuthHelper } from "../helpers/auth-helper";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";

@Injectable()
export class Http implements HttpInterceptor {
    constructor(
        private _snackbar: MatSnackBar,
        private _authHelper: AuthHelper,
        private _router:Router
    ) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                Authorization: `Bearer ${this._authHelper.getToken()}`
            }
        })
        return next.handle(req).pipe(
            tap(async (event: HttpEvent<any>) => {
                if (!(event instanceof HttpResponse)) return;

                if (req.method === 'GET' && event.status === 200) {
                    // Do nothing for successful GET requests
                }
                else {
                    this._snackbar.open(event.body.message, '✔', { duration: 5000 })
                }
            }),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401) {
                    this._snackbar.open("Unauthorized", 'ok', { duration: 5000 })
                    this._authHelper.logout();
                    this._router.navigate(['/login'])
                } else if (error.error != null) {
                    {
                        this._snackbar.open(error.error.message, 'ok', { duration: 5000})
                    }
                }
                else{
                    this._snackbar.open("Error", 'ok', { duration: 5000})
                }
                return throwError(() => new Error(error.message));
            })
        );

    }
}
