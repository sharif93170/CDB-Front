import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { Company } from 'src/app/shared/model/company.model';
import { CompanyService } from '../../shared/company.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-dashboard',
  templateUrl: './company-dashboard.component.html',
  styleUrls: ['./company-dashboard.component.scss']
})
export class CompanyDashboardComponent implements OnInit {

  @Input()
  dataSource;
  companies: Company[];

  displayedColumns = ['name', 'delete'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private _companyService: CompanyService, private _router: Router) { }

  refresh() {
    this._companyService
    .getCompany()
    .subscribe(
      companies => {
        this.companies = companies;
        this.dataSource = new MatTableDataSource(this.companies);
        this.dataSource.paginator = this.paginator;
        console.log('got datasource object', this.dataSource);
      }
    );
  }

  ngOnInit() {
    this.refresh();

  }

  editRedirect(id: number) {
    this._router.navigate (['dashboard/company/edit/' + id]);
  }

  delete(id: number) {
    this._companyService.deleteCompanyById(id.toString()).subscribe(() => {
     this.refresh();
    });
  }

}
