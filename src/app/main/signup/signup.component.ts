import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  users = [];

  constructor(private router: Router) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      name: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  onLoginRedirect(){
    this.router.navigate(['']);
  }

  onSubmit(){
    //Salvar nome, sobrenome, email e senha na database
    //Autenticar cadastro
    const signupFormValue = this.signupForm.value;
    this.signupForm.reset();
  }
}
