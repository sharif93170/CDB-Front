import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Computer } from '../../shared/model/computer.model';

@Injectable({
  providedIn: 'root'
})
export class ComputerService {
  private SERVER_URL = 'http://10.0.1.146:8080/webapp/computer';

  constructor(private _httpClient: HttpClient) { }

  getComputer(): Observable<Computer[]> {
    return this._httpClient.get<Computer[]>(this.SERVER_URL + '/all');
  }
  getCountComputer(): Observable<Computer> {
    return this._httpClient.get<Computer>(this.SERVER_URL + '/count');
  }

  getComputerById(id: string): Observable<Computer> {
    return this._httpClient.get<Computer>(`${this.SERVER_URL}/${id}`);
  }
  postComputer(computer: Computer): Observable<Computer> {
    return this._httpClient.post<Computer>(this.SERVER_URL , computer);
  }

  patchComputer(computer: Computer): Observable<Computer> {
    return this._httpClient.patch<Computer>(this.SERVER_URL, computer);
  }
  deleteComputerById(id: string): Observable<Computer> {
    return this._httpClient.delete<Computer>(`${this.SERVER_URL}/${id}`);
  }

  search(name: string): Observable<Computer[]> {
    return this._httpClient.get<Computer[]>(`${this.SERVER_URL + '/all' }/${name}`);
  }

  getSearchCountComputer(name: string): Observable<Computer> {
    return this._httpClient.get<Computer>(`${this.SERVER_URL + '/count'}/${name}`);
  }
}
