import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { MatSlideToggleChange } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  checked = false;
  device: String;

  constructor() { }

  ngOnInit() {
    this.device = 'User mode';
  }


  onChange(value) {
    if (value.checked === true) {
      this.device = 'Admin mode';
      this.checked = !this.checked;
    } else {
      this.device = 'User mode';
      this.checked = !this.checked;
    }
}
}
