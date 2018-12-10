import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Computer } from '../../shared/model/computer.model';

@Injectable({
  providedIn: 'root'
})
export class ComputerService {
  private SERVER_URL = 'http://localhost:8080/webapp/dashboard';

  constructor(private _httpClient: HttpClient) { }

  getComputer(): Observable<Computer[]> {
    return this._httpClient.get<Computer[]>(this.SERVER_URL);
  }
}
