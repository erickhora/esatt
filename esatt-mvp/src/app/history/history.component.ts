import {Component, OnInit, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';

import { Budget } from '../models/budget.model';
import { BudgetsService } from '../services/budgets.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit, OnDestroy {
  budgets: Budget[] = [];
  private budgetsSub: Subscription;

  constructor(public budgetsService: BudgetsService) { }

  ngOnInit() {
    this.budgetsService.getBudgets();
    this.budgetsSub = this.budgetsService.getBudgetUpdateListener()
      .subscribe((budgets: Budget[]) => {
        this.budgets = budgets;
      });
  }

  ngOnDestroy(){
    this.budgetsSub.unsubscribe();
  }
}
