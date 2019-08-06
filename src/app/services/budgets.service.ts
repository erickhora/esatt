import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { Budget } from '../models/budget.model';

@Injectable({ providedIn: 'root' })
export class BudgetsService {
  private budgets: Budget[] = [];
  private _budget: Budget;
  private budgetsUpdated = new Subject<Budget[]>();

  constructor(private http: HttpClient, private router: Router) {}

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
    content: string,
    creator: string,
    quantity: File
  ) {
    const budgetData = new FormData();
    budgetData.append('name', name);
    budgetData.append('description', description);
    budgetData.append('reference', reference);
    budgetData.append('content', content);
    budgetData.append('creator', creator);
    budgetData.append('quantity', quantity, name);
    this.http
      .post<{ message: string; budget: Budget }>(
        'http://localhost:3000/api/budgets',
        budgetData
      )
      .subscribe(responseData => {
        const budget: Budget = {
          id: responseData.budget.id,
          name: responseData.budget.name,
          description: responseData.budget.description,
          reference: responseData.budget.reference,
          content: responseData.budget.content,
          creator: responseData.budget.creator
        };
        this.budgets.push(budget);
        this.budgetsUpdated.next([...this.budgets]);
        this.router.navigate(['home/budgets', responseData.budget.id]);
      });
  }

  // GET Um orçamento
  getBudget(budgetId: string) {
    return this.http
      .get<{ message: string; budget: Budget }>(
        'http://localhost:3000/api/budgets/' + budgetId
      ).pipe(map(retrievedBudget => {
        console.log(retrievedBudget);
        retrievedBudget.budget.id = budgetId;
        return this._budget = retrievedBudget.budget;
      }));
  }

  // DELETE Um orçamento1
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
