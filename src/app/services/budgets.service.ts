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
  /* private _budget: Budget;
  private budgetRetrieved = new Subject<Budget>();
 */
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
        this.router.navigate(['home/budgets', budget.id]);
      });
  }

  // GET Um orçamento
  getBudget(budgetId: string) {
    return this.http
      .get<{ message: string; budget: Budget }>(
        'http://localhost:3000/api/budgets/' + budgetId
      ).pipe(map(retrievedBudget => {
        retrievedBudget.budget.id = budgetId;
        retrievedBudget.budget.content = (
          [
            {
               "id": 1,
               "name": "Tijolo",
               "quantity": "300",
               "unity": "un",
               "price": "12.76",
               "reference": "sinapi"
            },
            {
               "id": 2,
               "name": "Cimento",
               "quantity": "30",
               "unity": "kg",
               "price": "120.80",
               "reference": "sinapi"
            },
            {
               "id": 3,
               "name": "Porta",
               "quantity": "4",
               "unity": "m2",
               "price": "70.75",
               "reference": "sinapi"
            },
            {
               "id": 4,
               "name": "Tijolo",
               "quantity": "300",
               "unity": "un",
               "price": "12.76",
               "reference": "sinapi"
            },
            {
               "id": 5,
               "name": "Tijolo",
               "quantity": "300",
               "unity": "un",
               "price": "12.76",
               "reference": "sinapi"
            },
            {
               "id": 6,
               "name": "Tijolo",
               "quantity": "300",
               "unity": "un",
               "price": "12.76",
               "reference": "sinapi"
            },
            {
               "id": 7,
               "name": "Tijolo",
               "quantity": "300",
               "unity": "un",
               "price": "12.76",
               "reference": "sinapi"
            },
            {
               "id": 8,
               "name": "Tijolo",
               "quantity": "300",
               "unity": "un",
               "price": "12.76",
               "reference": "sinapi"
            },
            {
               "id": 9,
               "name": "Tijolo",
               "quantity": "300",
               "unity": "un",
               "price": "12.76",
               "reference": "sinapi"
            },
            {
               "id": 10,
               "name": "Tijolo",
               "quantity": "300",
               "unity": "un",
               "price": "12.76",
               "reference": "sinapi"
            }
         ]
        );
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
