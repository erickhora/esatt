import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Budget } from '../models/budget.model';

@Injectable({providedIn: 'root'})
export class BudgetsService {
  private budgets: Budget[] = [];
  private budgetsUpdated = new Subject<Budget[]>();

  constructor(private http: HttpClient){}

  getBudgets(){
    this.http.get<{message: string, budgets: any}>('http://localhost:3000/api/budgets')
      .pipe(map((budgetData) => {
        return budgetData.budgets.map((budget) => {
          return {
            name: budget.name,
            description: budget.description,
            reference: budget.reference,
            content: budget.content,
            creator: budget.creator,
            id: budget._id
          }
        });
      }))
      .subscribe((transformedBudget) => {
        this.budgets = transformedBudget;
        this.budgetsUpdated.next([...this.budgets]);
      });
  }

  getBudgetUpdateListener(){
    return this.budgetsUpdated.asObservable();
  }

  postBudget(name: string, description: string, reference: string, content: object, creator: string){
    const budget: Budget = {
      id: null,
      name,
      description,
      reference,
      content,
      creator
    }
    this.http.post<{message: string}>('http://localhost:3000/api/budgets', budget)
      .subscribe((responseData) => {
        console.log(responseData.message);
        this.budgets.push(budget);
        this.budgetsUpdated.next([...this.budgets]);
      });
  }

  deleteBudget(budgetId: string){
    this.http.delete('http://localhost:3000/api/budgets/' + budgetId)
      .subscribe(() => {
        console.log('Deletado!');
      });
  }
}
