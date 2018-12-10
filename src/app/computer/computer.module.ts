import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComputerDashboardComponent } from './routed/computer-dashboard/computer-dashboard.component';
import { ComputerListComponent } from './routed/computer-list/computer-list.component';
import { ComputerEditComponent } from './routed/computer-edit/computer-edit.component';
import { ComputerCreateComponent } from './routed/computer-create/computer-create.component';

@NgModule({
  declarations: [ComputerDashboardComponent, ComputerListComponent, ComputerEditComponent, ComputerCreateComponent],
  imports: [
    CommonModule
  ]
})
export class ComputerModule { }
