import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/shared/model/user.model';


@Injectable({ providedIn: 'root' })
export class UserService {
  private SERVER_URL = 'http://10.0.1.146:8080/webapp/login';
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${this.SERVER_URL}/users`);
    }
}
