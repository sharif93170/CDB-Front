import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerDashboardComponent } from './computer-dashboard.component';

describe('ComputerDashboardComponent', () => {
  let component: ComputerDashboardComponent;
  let fixture: ComponentFixture<ComputerDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputerDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
