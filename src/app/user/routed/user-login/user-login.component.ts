import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../_service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { url } from 'inspector';
import {  HttpClient } from '@angular/common/http';

@Component({
  templateUrl: './user-login.component.html',
  selector: 'app-user-login',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    model: any = {};

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private http: HttpClient
    ) {
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
      sessionStorage.setItem('token', '');
  }

  login() {
      this.http.post<Observable<boolean>>('http://10.0.1.146:8080/webapp/login' , {
        userName: this.model.username,
        password: this.model.password
    }).subscribe(isValid => {
        if (isValid) {
            sessionStorage.setItem(
              'token',
              btoa(this.model.username + ':' + this.model.password)
            );
        this.router.navigate(['/dashboard/computer']);
        } else {
            alert('Authentication failed.');
        }
    });

  }
}
