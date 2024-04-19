import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { UserDataViewModel } from "../api/models";
import { Roles } from "../enums/roles.enum";

@Injectable()

export class AuthHelper {
    private _isLoggedIn = new BehaviorSubject<boolean>(this.checkLogin());
    isLoggedIn = this._isLoggedIn.asObservable();

    roles : string[] = [];
    $rolesObservable = new BehaviorSubject<string[]>(this.roles)
    constructor(private router: Router) {}
    public static readonly authKey = "auth";

    public login(auth: UserDataViewModel): void {
        localStorage.setItem(AuthHelper.authKey, JSON.stringify(auth));
        this._isLoggedIn.next(true);
        this.$rolesObservable.next(this.getRoles())
        if(this.hasRole(Roles.Admin)){
            this.router.navigate(["/admin/"]);
        }
        else if(this.hasRole(Roles.Customer)){
            this.router.navigate(["/profile/"]);
        }

    }
    public logout(): void {

        localStorage.removeItem(AuthHelper.authKey);
        this._isLoggedIn.next(false);
        this.$rolesObservable.next([])
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
        return this.getAuth()?.roles ?? [];
    }
    public getUserName():string|undefined|null{
        return this.getAuth()?.name;
    }
    public hasRole(role:string) : boolean{
        return this.getRoles().includes(role);
    }

    public isInAdminPanel(route:ActivatedRoute){
        return route.snapshot.parent?.url[0]?.path == Roles.Admin.toLowerCase();
    }
}
