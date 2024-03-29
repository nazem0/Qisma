import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomPropertyForAdminService {

  constructor(private http:HttpClient) { }
  addPropertyFromForm(data:FormData){
    return this.http.post(`${environment.api}/api/Dashboard/Property/AddFromForm`, data)
  }
}
