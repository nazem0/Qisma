import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { UserDataViewModel } from "../api/models";

@Injectable()

export class AuthHelper {
    private _isLoggedIn = new BehaviorSubject<boolean>(this.checkLogin());
    isLoggedIn = this._isLoggedIn.asObservable();

    roles : string[] = [];
    $roleObservable = new BehaviorSubject<string[]>(this.roles)
    constructor(private router: Router) {

    }
    public static readonly authKey = "auth";

    public login(auth: UserDataViewModel): void {
        localStorage.setItem(AuthHelper.authKey, JSON.stringify(auth));
        this._isLoggedIn.next(true);
        this.$roleObservable.next(this.getRoles())
        this.router.navigate(["home"]);

    }
    public logout(): void {

        localStorage.removeItem(AuthHelper.authKey);
        this._isLoggedIn.next(false);
        this.$roleObservable.next([])
        this.router.navigate(["login"]);
    }

    public getAuth(): UserDataViewModel | void {
        let auth = localStorage.getItem("auth");
        if (!auth) return;
        let jsonAuth = JSON.parse(auth!) as UserDataViewModel;
        return jsonAuth;
    }
    public getToken(): string | null | undefined {
        return this.getAuth()?.token;
    }

    public checkLogin(): boolean {
        return this.getAuth()?.token ? true : false;
    }

    public getRoles(): string[] {
        let result = this.getAuth()?.roles;
        return result ?? [];
    }
}
