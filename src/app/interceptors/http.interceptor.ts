import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable, catchError, tap, throwError } from "rxjs";
import { Helper } from "../services/helper";
import { MessageService } from "primeng/api";
import { Injectable } from "@angular/core";
import { AuthHelper } from "../services/auth-helper";

@Injectable()
export class Http implements HttpInterceptor {
    constructor(
        private messageService: MessageService,
        private _authHelper: AuthHelper,
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
                } else if (event.ok && event.status === 200) {
                    this.messageService.add(
                        { severity: 'success', detail: event.body.message, life: 5000 },
                    );
                } else if ((event.body.ok || event.ok) && event.body.message) {
                    this.messageService.add(
                        { severity: 'info', detail: event.body.message, life: 5000 },
                    );
                } else if ((!event.body.ok || !event.ok) && event.body.message) {
                    this.messageService.add(
                        { severity: 'warn', detail: event.body.message, life: 5000 },
                    );
                }

            }),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401) {
                    this.messageService.add(
                        { severity: 'error', detail: "Unauthorized", life: 5000 },
                    );
                    this._authHelper.logout();
                } else {
                    if (error.error != null) {
                        this.messageService.add(
                            { severity: 'error', detail: error.error.message, life: 5000 },
                        );
                    }
                }
                return throwError(() => new Error(error.message));
            })
        );

    }
}
