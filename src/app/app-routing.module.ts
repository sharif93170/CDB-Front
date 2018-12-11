import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComputerCreateComponent } from './computer/routed/computer-create/computer-create.component';
import { ComputerDashboardComponent } from './computer/routed/computer-dashboard/computer-dashboard.component';
import { ComputerEditComponent } from './computer/routed/computer-edit/computer-edit.component';
import { CompanyDashboardComponent } from './company/routed/company-dashboard/company-dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard/computer',
    component: ComputerDashboardComponent
  },
  {
    path: 'dashboard/company',
    component: CompanyDashboardComponent
  },
  {
    path: 'dashboard/computer/create',
    component: ComputerCreateComponent
  },
  {
    path: 'dashboard/computer/edit/:id',
    component: ComputerEditComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
