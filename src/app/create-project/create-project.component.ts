import { Component, OnInit, Input } from '@angular/core';
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
  fileName;
  form: FormGroup;
  @Input() myPrices;

  constructor(public budgetsService: BudgetsService) {}

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
      content: new FormControl(null),
      creator: new FormControl(null),
      quantity: new FormControl(null, {
        validators: [Validators.required]
      }),
    });
  }

  onAddedQuantity(event: Event) {
    const qtyFile = (event.target as HTMLInputElement).files[0];
    this.fileName = qtyFile.name;
    this.form.patchValue({quantity: qtyFile});
    this.form.get('quantity').updateValueAndValidity();
    console.log(qtyFile);
    console.log(this.form);
  }

  onAddBudget() {
    if (this.form.invalid) {
      console.log('Invalid: ' + this.form.invalid);
      console.log(this.form.value);
      return;
    }
    this.budgetsService.postBudget(
      this.form.value.name,
      this.form.value.description,
      this.form.value.reference,
      '',
      '',
      this.form.value.quantity
    );
    console.log(this.form.value);
  }
}
