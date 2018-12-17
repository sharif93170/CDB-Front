import { Component, ViewChild, Input, OnInit } from '@angular/core';
import { Computer } from 'src/app/shared/model/computer.model';
import { ComputerService } from '../../shared/computer.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-computer-dashboard',
  templateUrl: './computer-dashboard.component.html',
  styleUrls: ['./computer-dashboard.component.scss']
})
export class ComputerDashboardComponent implements OnInit {


  @Input()
  dataSource;
  computers: Computer[];
  length: number;

  displayedColumns = ['name', 'introduced', 'discontinued', 'company'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private _computerService: ComputerService) { }

  ngOnInit() {

    this._computerService
      .getComputer()
      .subscribe(
        computers => {
          this.computers = computers;
          this.dataSource = new MatTableDataSource(this.computers);
          this.dataSource.paginator = this.paginator;
          this.length = this.computers.length;
          console.log('got datasource object', this.dataSource);
        }
      );

  }

}
