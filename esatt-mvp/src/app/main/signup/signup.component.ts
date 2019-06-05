import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { SignupService } from '../../services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  users = [];

  constructor(private router: Router,
              private authService: AuthService,
              private sigupService: SignupService
            ) { }

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
    this.sigupService.storeUsers(this.signupForm.value);
    //Autenticar cadastro
    const signupFormValue = this.signupForm.value;
    this.authService.singupUser(signupFormValue.email, signupFormValue.password);
    this.signupForm.reset();
  }
}
