import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComputerCreateComponent } from './computer/routed/computer-create/computer-create.component';
import { ComputerDashboardComponent } from './computer/routed/computer-dashboard/computer-dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: ComputerDashboardComponent
  },
  {
    path: 'dashboard/create',
    component: ComputerCreateComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
