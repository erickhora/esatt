import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Budget } from '../models/budget.model';

@Injectable({ providedIn: 'root' })
export class BudgetsService {
  private budgets: Budget[] = [];
  private budget: Budget;
  private budgetsUpdated = new Subject<Budget[]>();

  constructor(private http: HttpClient) {}

  // GET Todos os orçamentos
  getBudgets() {
    this.http
      .get<{ message: string; budgets: any }>(
        'http://localhost:3000/api/budgets'
      )
      .pipe(
        map(budgetData => {
          return budgetData.budgets.map(budget => {
            return {
              name: budget.name,
              description: budget.description,
              reference: budget.reference,
              content: budget.content,
              creator: budget.creator,
              id: budget._id
            };
          });
        })
      )
      .subscribe(transformedBudget => {
        this.budgets = transformedBudget;
        this.budgetsUpdated.next([...this.budgets]);
      });
  }

  getBudgetUpdateListener() {
    return this.budgetsUpdated.asObservable();
  }

  // POST Um orçamento
  postBudget(
    name: string,
    description: string,
    reference: string,
    content: object,
    creator: string
  ) {
    const budget: Budget = {
      id: null,
      name,
      description,
      reference,
      content,
      creator
    };
    this.http
      .post<{ message: string; budgetId: string }>(
        'http://localhost:3000/api/budgets',
        budget
      )
      .subscribe(responseData => {
        const id = responseData.budgetId;
        budget.id = id;
        this.budgets.push(budget);
        this.budgetsUpdated.next([...this.budgets]);
      });
  }

  // GET Um orçamento
  getBudget(budgetId: string) {
    this.http
      .get<{ message: string; budget: Budget }>(
        'http://localhost:3000/api/budgets/' + budgetId
      )
      .subscribe(budgetData => {
        this.budget = budgetData.budget;
      });
  }

  // DELETE Um orçamento
  deleteBudget(budgetId: string) {
    this.http
      .delete('http://localhost:3000/api/budgets/' + budgetId)
      .subscribe(() => {
        const updatedBudgets = this.budgets.filter(
          budget => budget.id !== budgetId
        );
        this.budgets = updatedBudgets;
        this.budgetsUpdated.next([...this.budgets]);
      });
  }
}
