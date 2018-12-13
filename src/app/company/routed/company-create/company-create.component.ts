import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/shared/model/company.model';
import { FormControl } from '@angular/forms';
import { CompanyService } from '../../shared/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-create',
  templateUrl: './company-create.component.html',
  styleUrls: ['./company-create.component.scss']
})
export class CompanyCreateComponent implements OnInit {

  company: Company;
  date = new FormControl(new Date());
  constructor(private _router: Router, private _companyService: CompanyService) { }

  ngOnInit() {
    this.company = new Company();
  }

  create() {
    console.log(this.company);
    this._companyService.postCompany(this.company).subscribe(() => this._router.navigate(['/dashboard/company']));
  }

  back() {
    this._router.navigate(['/dashboard/company']);
  }


}
