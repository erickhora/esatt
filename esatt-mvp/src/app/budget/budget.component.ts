import { Component, OnInit } from '@angular/core';

export interface Budget {
  id: number;
  name: string;
  quantity: number;
  unity: string;
  price: number;
  reference: string;
}

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {
  budgets: Budget[] = [
    {
      id: 1,
      name: 'Tijolo',
      quantity: 3000,
      unity: 'un',
      price: 590.99,
      reference: 'SINAPI'
    },
    {
      id: 2,
      name: 'Cimento',
      quantity: 60,
      unity: 'kg',
      price: 700.50,
      reference: 'SINAPI'
    },
    {
      id: 3,
      name: 'Porta',
      quantity: 4,
      unity: 'un',
      price: 599.99,
      reference: 'SINAPI'
    },
    {
      id: 4,
      name: 'Tijolo',
      quantity: 3000,
      unity: 'un',
      price: 590.99,
      reference: 'SINAPI'
    },
    {
      id: 5,
      name: 'Tijolo',
      quantity: 3000,
      unity: 'un',
      price: 590.99,
      reference: 'SINAPI'
    },
    {
      id: 6,
      name: 'Tijolo',
      quantity: 3000,
      unity: 'un',
      price: 590.99,
      reference: 'SINAPI'
    },
    {
      id: 7,
      name: 'Tijolo',
      quantity: 3000,
      unity: 'un',
      price: 590.99,
      reference: 'SINAPI'
    },
    {
      id: 8,
      name: 'Tijolo',
      quantity: 3000,
      unity: 'un',
      price: 590.99,
      reference: 'SINAPI'
    },
    {
      id: 9,
      name: 'Tijolo',
      quantity: 3000,
      unity: 'un',
      price: 590.99,
      reference: 'SINAPI'
    },
    {
      id: 10,
      name: 'Tijolo',
      quantity: 3000,
      unity: 'un',
      price: 590.99,
      reference: 'SINAPI'
    },
    {
      id: 11,
      name: 'Tijolo',
      quantity: 3000,
      unity: 'un',
      price: 590.99,
      reference: 'SINAPI'
    },
    {
      id: 12,
      name: 'Tijolo',
      quantity: 3000,
      unity: 'un',
      price: 590.99,
      reference: 'SINAPI'
    },
    {
      id: 13,
      name: 'Tijolo',
      quantity: 3000,
      unity: 'un',
      price: 590.99,
      reference: 'SINAPI'
    },
    {
      id: 14,
      name: 'Tijolo',
      quantity: 3000,
      unity: 'un',
      price: 590.99,
      reference: 'SINAPI'
    },
    {
      id: 15,
      name: 'Tijolo',
      quantity: 3000,
      unity: 'un',
      price: 590.99,
      reference: 'SINAPI'
    },
    {
      id: 16,
      name: 'Tijolo',
      quantity: 3000,
      unity: 'un',
      price: 590.99,
      reference: 'SINAPI'
    },
    {
      id: 17,
      name: 'Tijolo',
      quantity: 3000,
      unity: 'un',
      price: 590.99,
      reference: 'SINAPI'
    },
    {
      id: 18,
      name: 'Tijolo',
      quantity: 3000,
      unity: 'un',
      price: 590.99,
      reference: 'SINAPI'
    },
    {
      id: 19,
      name: 'Tijolo',
      quantity: 3000,
      unity: 'un',
      price: 590.99,
      reference: 'SINAPI'
    },
    {
      id: 20,
      name: 'Tijolo',
      quantity: 3000,
      unity: 'un',
      price: 590.99,
      reference: 'SINAPI'
    },
];

  displayedColumns: string[] = ['id', 'name', 'quantity', 'unity', 'price', 'reference'];
  dataSource = this.budgets;

  constructor() { }

  ngOnInit() {
  }

  getTotalPrice(){
    return this.budgets
      .map(t => t.price)
      .reduce((acc, value) => acc + value, 0);
  }

}
