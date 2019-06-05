import { Component, OnInit } from '@angular/core';

import { Budget } from '../models/budget.model';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {
  budgets: Budget[] = [];
  //const items[] = budget.content;

  displayedColumns: string[] = ['id', 'name', 'quantity', 'unity', 'price', 'reference'];
  dataSource = this.budgets;

  constructor() { }

  ngOnInit() {
  }

}
