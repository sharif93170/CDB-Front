import { Component, OnInit } from '@angular/core';
import { Computer } from 'src/app/shared/model/computer.model';
import { ComputerService } from '../../shared/computer.service';

@Component({
  selector: 'app-computer-list',
  templateUrl: './computer-list.component.html',
  styleUrls: ['./computer-list.component.scss']
})
export class ComputerListComponent implements OnInit {


  constructor(private _computerService: ComputerService ) { }

  ngOnInit() {

  }

}
