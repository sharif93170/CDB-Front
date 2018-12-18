import { Component, OnInit } from '@angular/core';
import { Computer } from 'src/app/shared/model/computer.model';
import { ComputerService } from '../../shared/computer.service';
import { Router } from '@angular/router';
import { Company } from 'src/app/shared/model/company.model';
import { CompanyService } from 'src/app/company/shared/company.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-computer-create',
  templateUrl: './computer-create.component.html',
  styleUrls: ['./computer-create.component.scss']
})
export class ComputerCreateComponent implements OnInit {

  computer: Computer;
  companies: Company[];
  constructor(private _computerService: ComputerService, private _router: Router, private _companyService: CompanyService) { }

  ngOnInit() {
    this.computer = new Computer();
    this._companyService
      .getCompany()
      .subscribe(
        companies => {
          this.companies = companies;
          console.log('got Companies object', this.companies);
        }
      );
  }

  create() {
    console.log(this.computer);
    this._computerService.postComputer(this.computer).subscribe(() => this._router.navigate(['/dashboard/computer']));
  }

  back() {
    this._router.navigate(['/dashboard/computer']);
  }

}
