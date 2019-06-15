import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  form: FormGroup;

  constructor(private router: Router, public budgetsService: BudgetsService) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, {
        validators: [Validators.required]
      }),
      description: new FormControl(null, {
        validators: [Validators.required]
      }),
      reference: new FormControl(null, {
        validators: [Validators.required]
      }),
      file: new FormControl(null, {
        validators: [Validators.required]
      })
    });
  }

  onAddBudget() {
    if (this.form.invalid) {
      return;
    }
    this.budgetsService.postBudget(
      this.form.value.name,
      this.form.value.description,
      this.form.value.reference,
      null,
      ''
    );
  }

  onAddedQuantity(event: Event){
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({file});
    this.form.get('file').updateValueAndValidity();
  }
}
