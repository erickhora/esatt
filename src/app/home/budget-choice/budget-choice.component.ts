import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ReferencesService } from 'src/app/services/references.service';

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
  fileName;
  form: FormGroup;

  constructor(public referencesService: ReferencesService ) {}

  ngOnInit() {
    this.form = new FormGroup({
      reference: new FormControl(null, {
        validators: [Validators.required]
      })
    });
  }

  onReferencePicked(event: Event) {
    const refFile = (event.target as HTMLInputElement).files[0];
    this.fileName = refFile.name;
    this.form.patchValue({reference: refFile});
    this.form.get('reference').updateValueAndValidity();
    console.log(refFile);
    console.log(this.form);
  }

  onAddPersonalReferences() {
    if (this.form.invalid) {
      console.log('Invalid: ' + this.form.invalid);
      console.log(this.form.value);
      return;
    }
    this.referencesService.postReference(
      this.fileName,
      this.form.value.reference,
      ''
    );
  }

}
