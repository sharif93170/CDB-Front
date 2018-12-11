import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Company } from '../../shared/model/company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private SERVER_URL = 'http://10.0.1.146:8080/webapp/company';

  constructor(private _httpClient: HttpClient) { }

  getCompany(): Observable<Company[]> {
    return this._httpClient.get<Company[]>(this.SERVER_URL + '/all');
  }
}
