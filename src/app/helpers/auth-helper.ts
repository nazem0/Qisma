import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { UserDataViewModel } from "../api/models";
import { Roles } from "../enums/roles.enum";

@Injectable({
    providedIn: 'root'
})

export class AuthHelper {
    private _isLoggedIn = new BehaviorSubject<boolean>(this.checkLogin());
    isLoggedIn = this._isLoggedIn.asObservable();

    roles : string[] = [];
    $rolesObservable = new BehaviorSubject<string[]>(this.roles)
    constructor(private router: Router) {}
    public static readonly authKey = "auth";

    public handleLogin(auth : UserDataViewModel){
        this.login(auth);

          let previousUrl = sessionStorage.getItem("previous-url")
          if (previousUrl) {
            sessionStorage.removeItem("previous-url")
          }
          if (this.hasRole(Roles.Admin)) {
            this.router.navigate(["/admin/"]);
          }
          else if (this.hasRole(Roles.Customer)) {
            if (previousUrl) {
              this.router.navigateByUrl(previousUrl);
            }
            else{
              this.router.navigate(["/marketplace/"]);
            }
          }
    }


    public login(auth: UserDataViewModel): void {
        localStorage.setItem(AuthHelper.authKey, JSON.stringify(auth));
        this._isLoggedIn.next(true);
        this.$rolesObservable.next(this.getRoles());
    }
    public logout(): void {

        localStorage.removeItem(AuthHelper.authKey);
        this._isLoggedIn.next(false);
        this.$rolesObservable.next([])
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
      console.log(route);

        return route.snapshot.parent?.url[0]?.path == Roles.Admin.toLowerCase();
    }
}
