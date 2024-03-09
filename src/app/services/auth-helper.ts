import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()

export class AuthHelper {
    private _isLoggedIn = new BehaviorSubject<boolean>(this.checkLogin());
    isLoggedIn = this._isLoggedIn.asObservable();

    role = "";
    $roleObservable = new BehaviorSubject<string>(this.role)
    constructor(private router: Router) {

    }
    public static readonly authKey = "auth";

    public login(auth: any): void {
        localStorage.setItem(AuthHelper.authKey, JSON.stringify(auth));
        this._isLoggedIn.next(true);
        this.$roleObservable.next(this.getRole())
        this.router.navigate(["home"]);

    }
    public logout(): void {
        
        localStorage.removeItem(AuthHelper.authKey);
        this._isLoggedIn.next(false);
        this.$roleObservable.next("")
        this.router.navigate(["login"]);
    }

    public getAuth(): any | void {
        let auth = localStorage.getItem("auth");
        if (!auth) return;
        let jsonAuth = JSON.parse(auth) as any;        
        return jsonAuth;
    }
    public getToken(): string | null | undefined {
        return this.getAuth()?.token;
    }

    public checkLogin(): boolean {
        return this.getAuth()?.token ? true : false;
    }

    public getRole():string{
        let result = this.getAuth()?.role??""        
        return result
    }
}
