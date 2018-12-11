import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComputerDashboardComponent } from './routed/computer-dashboard/computer-dashboard.component';
import { ComputerListComponent } from './routed/computer-list/computer-list.component';
import { ComputerEditComponent } from './routed/computer-edit/computer-edit.component';
import { ComputerCreateComponent } from './routed/computer-create/computer-create.component';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ComputerDashboardComponent, ComputerListComponent, ComputerEditComponent, ComputerCreateComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ComputerModule { }
