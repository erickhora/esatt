import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { BudgetsService } from '../services/budgets.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {
  enteredName = '';
  enteredDescription = '';
  enteredReference = '';

  constructor(private router: Router, public budgetsService: BudgetsService) {}

  ngOnInit() {}

  onAddBudget(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.budgetsService.postBudget(
      form.value.name,
      form.value.description,
      form.value.reference,
      null,
      ''
    );
  }
  // onCreateRedirect(){
  //   this.router.navigate(['home/new-project/budget']);
  // }
}
