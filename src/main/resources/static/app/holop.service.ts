import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Holop } from './holop';

@Injectable()
export class HolopService {
  constructor(
    private http: Http
  ) {  }

  private holopsUrl = '/rest/holops';

  getAll(): Observable<Holop[]> {
    return this.http.get(this.holopsUrl)
      .map(resp => resp.json() as Holop[]);
  }

  get(id: number): Observable<Holop> {
    return this.http.get(this.holopsUrl + '/' + id)
      .map(resp => resp.json() as Holop);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.holopsUrl + '/' + id)
      .map(resp => resp.json());
  }

  save(holop: Holop): Observable<Holop> {
    return this.http.post(this.holopsUrl + '/' + holop.id, holop)
      .map(resp => resp.json() as Holop);
  }
}
