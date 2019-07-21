import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-budget-choice',
  templateUrl: './budget-choice.component.html',
  styleUrls: ['./budget-choice.component.css']
})

export class BudgetChoiceComponent implements OnInit{

  firstChoice = true;
  myRef = false;
  myPrices = false;
  afterUpload = false;
  form: FormGroup;

  constructor() {}

  ngOnInit() {}

  onReferencePicked(event: Event) {
    const refFiles = (event.target as HTMLInputElement).files;
    this.form.patchValue({refFiles});
    this.form.get('refFiles').updateValueAndValidity();
  }

  // onAddPersonalReferences() {

  // }

}
