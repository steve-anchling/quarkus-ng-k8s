import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {UserModel} from "../model/User";

@Injectable({
  providedIn: 'root'
})
export class UsermgmtService {
  private API = environment.apiUrl + 'api/user/management';

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<any> {
    return this.http.get(this.API + '/all');
  }

  get(id: string): Observable<any> {
    return this.http.get(this.API + '/' + id);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.API + '/' + id);
  }

  save(model: UserModel): Observable<any> {
    return this.http.post(this.API + '/save', model);
  }
}
