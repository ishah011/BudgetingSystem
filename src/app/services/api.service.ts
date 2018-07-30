import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  constructor(private _http: HttpClient) { }

  getHome(): Observable<string>{
    return this._http.get<string>('http://localhost:8080/');
  }
}
