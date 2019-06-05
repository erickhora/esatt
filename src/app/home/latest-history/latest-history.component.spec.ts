import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestHistoryComponent } from './latest-history.component';

describe('LatestHistoryComponent', () => {
  let component: LatestHistoryComponent;
  let fixture: ComponentFixture<LatestHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
