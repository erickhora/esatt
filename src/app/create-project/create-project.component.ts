import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { BudgetsService } from '../services/budgets.service';

export interface Item {
  value: string;
  viewValue: string;
}

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
  @Input() myPrices;
  selectItems: Item[] = [
    { value: 'id', viewValue: 'Código' },
    { value: 'name', viewValue: 'Nome' },
    { value: 'quantity', viewValue: 'Quantidade' },
    { value: 'unity', viewValue: 'Unidade' }
  ];

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
      qtyFile: new FormControl(null, {
        validators: [Validators.required]
      }),
    });
  }

  onAddedQuantity(event: Event){
    const qtyFile = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({qtyFile});
    this.form.get('qtyFile').updateValueAndValidity();
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
      '',
      this.form.value.quantity
    );
    console.log(this.form.value);
    return false;
  }
}
