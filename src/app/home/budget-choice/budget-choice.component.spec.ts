import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetChoiceComponent } from './budget-choice.component';

describe('BudgetChoiceComponent', () => {
  let component: BudgetChoiceComponent;
  let fixture: ComponentFixture<BudgetChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
