import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { HttpClientModule } from '@angular/common/http';
import { ComputerModule } from './computer/computer.module';
import { MatTableModule } from '@angular/material/table';
import { CompanyModule } from './company/company.module';
import { UserModule } from './user/user.module';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule, MatInputModule, MatSortModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    HttpClientModule,
    ComputerModule,
    CompanyModule,
    MatTableModule,
    UserModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
