import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/shared/model/user.model';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class UserService {
  private SERVER_URL = 'http://10.0.1.146:8080/webapp/login';
    constructor(private http: HttpClient) { }


  login(loginPayload): Observable<UserService> {
    return this.http.post<UserService>('http://localhost:8080/' + 'token/generate-token', loginPayload);
  }

  getUsers() : Observable<UserService> {
    return this.http.get<UserService>(this.SERVER_URL);
  }

  getUserById(id: number): Observable<UserService> {
    return this.http.get<UserService>(this.SERVER_URL + id);
  }

  createUser(user: User): Observable<UserService> {
    return this.http.post<UserService>(this.SERVER_URL, user);
  }

  updateUser(user: User): Observable<UserService> {
    return this.http.put<UserService>(this.SERVER_URL + user.id, user);
  }

  deleteUser(id: number): Observable<UserService> {
    return this.http.delete<UserService>(this.SERVER_URL + id);
  }



}
