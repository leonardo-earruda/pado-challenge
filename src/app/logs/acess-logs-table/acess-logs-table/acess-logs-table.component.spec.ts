import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessLogsTableComponent } from './acess-logs-table.component';

describe('AcessLogsTableComponent', () => {
  let component: AcessLogsTableComponent;
  let fixture: ComponentFixture<AcessLogsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcessLogsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcessLogsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
