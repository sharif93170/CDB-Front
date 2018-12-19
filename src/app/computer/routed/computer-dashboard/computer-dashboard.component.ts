import {
  Component,
  ViewChild,
  Input,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';
import { Computer } from 'src/app/shared/model/computer.model';
import { ComputerService } from '../../shared/computer.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatSort } from '@angular/material';

@Component({
  selector: 'app-computer-dashboard',
  templateUrl: './computer-dashboard.component.html',
  styleUrls: ['./computer-dashboard.component.scss']
})
export class ComputerDashboardComponent implements OnInit {
  @Input()
  dataSource;
  computers: Computer[];
  computer: Computer;
  computerCount: Computer;
  length: number;
  name: any;

  displayedColumns = [
    'name',
    'introduced',
    'discontinued',
    'company',
    'delete'
  ];

  computerNameForm = this._fb.group({
    name: new FormControl('')
  });

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private _computerService: ComputerService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _fb: FormBuilder
  ) {}

  refresh() {
    this._computerService.getComputer().subscribe(computers => {
      this.computers = computers;
      this.dataSource = new MatTableDataSource(this.computers);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.length = this.computers.length;
    });
    this._computerService.getCountComputer().subscribe(computer => {
      this.computerCount = computer;
    });
  }

  ngOnInit() {
    this.refresh();
  }

  editRedirect(id: number) {
    this._router.navigate(['dashboard/computer/edit/' + id]);
  }

  search() {
    console.log(this.name);
    this._computerService.search(this.name).subscribe(computers => {
      console.log('Search datasource', this.computers);
      this.computers = computers;
      this.dataSource = new MatTableDataSource(this.computers);
      this.dataSource.paginator = this.paginator;
      this.length = this.computers.length;
    });
    this._computerService.getSearchCountComputer(this.name).subscribe(computer => {
      this.computerCount = computer;
    });
  }

  delete(id: number) {
    this._computerService.deleteComputerById(id.toString()).subscribe(() => {
     this.refresh();
    });
  }
}
