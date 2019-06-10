import { Component, OnInit} from '@angular/core';

import { Budget } from '../models/budget.model';
import { ActivatedRoute, Params } from '@angular/router';
import { BudgetsService } from '../services/budgets.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {
  budget: Budget;

  displayedColumns: string[] = ['id', 'name', 'quantity', 'unity', 'price', 'reference'];
  dataSource = this.budget;

  constructor(private route: ActivatedRoute, private budgetsService: BudgetsService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.route.params
      .subscribe(
        (params: Params) => {
          this.budget.id = params.id;
        }
      );
    this.budgetsService.getBudget(id)
      .subscribe(retrievedBudget => {
        this.budget = retrievedBudget;
      });
    }
}
