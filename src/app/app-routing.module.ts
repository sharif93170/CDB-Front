import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComputerCreateComponent } from './computer/routed/computer-create/computer-create.component';
import { ComputerDashboardComponent } from './computer/routed/computer-dashboard/computer-dashboard.component';
import { CompanyDashboardComponent } from './company/routed/company-dashboard/company-dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard/computer',
    component: ComputerDashboardComponent
  },
  {
    path: 'dashboard/computer/create',
    component: ComputerCreateComponent
  },
  {
    path: 'dashboard/company',
    component: CompanyDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
