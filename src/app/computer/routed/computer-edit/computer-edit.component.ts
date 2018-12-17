import { Component, OnInit } from '@angular/core';
import { Computer } from 'src/app/shared/model/computer.model';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { ComputerService } from '../../shared/computer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'src/app/shared/model/company.model';
import { CompanyService } from 'src/app/company/shared/company.service';

@Component({
  selector: 'app-computer-edit',
  templateUrl: './computer-edit.component.html',
  styleUrls: ['./computer-edit.component.scss']
})
export class ComputerEditComponent implements OnInit {
  computer: Computer;
  companies: Company[];
  computerForm = this._fb.group({
    name: new FormControl('', Validators.required),
    introduced: new FormControl(''),
    discontinued: new FormControl(''),
    companyName: new FormControl(''),
    companyId: new FormControl('')
  });

  constructor(
    private _computerService: ComputerService,
    private _companyService: CompanyService,
    private _route: ActivatedRoute,
    private _fb: FormBuilder,
    private _router: Router
  ) {}

  ngOnInit() {
    this.computer = new Computer();
    this._companyService.getCompany().subscribe(companies => {
      this.companies = companies;
      console.log('got Companies object', this.companies);
    });
    this._computerService
      .getComputerById(this._route.snapshot.paramMap.get('id'))
      .subscribe(
        computer => {
          this.computer = computer;
          this.computerForm.patchValue({
            name: this.computer.name,
            introduced: this.computer.introduced,
            discontinued: this.computer.discontinued,
            companyName: this.computer.companyName,
            companyId: this.computer.companyId
          });
          console.log('got computer object', this.computer);
        },

        error => console.log(error)
      );
  }

  edit() {
    this.computer.name = this.computerForm.get('name').value;
    this.computer.introduced = this.computerForm.get('introduced').value;
    this.computer.discontinued = this.computerForm.get('discontinued').value;
    this.computer.companyName = this.computerForm.get('companyName').value;
    this.computer.companyId = this.computerForm.get('companyId').value;
    console.log('got computer postform object', this.computer);
    this._computerService
      .patchComputer(this.computer)
      .subscribe(() => this._router.navigate(['/dashboard/computer']));
  }
}
