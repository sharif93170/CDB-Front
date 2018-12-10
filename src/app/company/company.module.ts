import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyListComponent } from './routed/company-list/company-list.component';
import { CompanyCreateComponent } from './routed/company-create/company-create.component';
import { CompanyEditComponent } from './routed/company-edit/company-edit.component';
import { CompanyDashboardComponent } from './routed/company-dashboard/company-dashboard.component';

@NgModule({
  declarations: [CompanyListComponent, CompanyCreateComponent, CompanyEditComponent, CompanyDashboardComponent],
  imports: [
    CommonModule
  ]
})
export class CompanyModule { }
