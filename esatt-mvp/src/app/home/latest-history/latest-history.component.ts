import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Budget } from '../../models/budget.model';
import { BudgetsService } from 'src/app/services/budgets.service';

@Component({
  selector: 'app-latest-history',
  templateUrl: './latest-history.component.html',
  styleUrls: ['./latest-history.component.css']
})
export class LatestHistoryComponent implements OnInit, OnDestroy {
  budgets: Budget[] = [];
  private budgetsSub: Subscription;

  filteredBudget = '';

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
