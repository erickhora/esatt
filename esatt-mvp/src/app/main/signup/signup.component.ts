import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  users = [];

  constructor(private router: Router, private signupService: SignupService) { }

  private generateId(){
    return Math.round(Math.random()*10000);
  }

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

  onSubmit(id: number, name: string, lastname: string, email: string, password: string){
    this.users.push({
      id: this.generateId(),
      form: this.signupForm.getRawValue()
    });

    this.signupService.storeUsers(this.users).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

}
