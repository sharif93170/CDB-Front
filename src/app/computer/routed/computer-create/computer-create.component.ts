import { Component, OnInit } from '@angular/core';
import { Computer } from 'src/app/shared/model/computer.model';
import { ComputerService } from '../../shared/computer.service';
import { Router } from '@angular/router';
import { Company } from 'src/app/shared/model/company.model';

@Component({
  selector: 'app-computer-create',
  templateUrl: './computer-create.component.html',
  styleUrls: ['./computer-create.component.scss']
})
export class ComputerCreateComponent implements OnInit {

  computer: Computer;
  constructor(private _computerService: ComputerService, private _router: Router) { }

  ngOnInit() {
    this.computer = new Computer();
  }

  create() {
    this._computerService.postComputer(this.computer).subscribe(() => this._router.navigate(['/dashboard']));
  }

}
