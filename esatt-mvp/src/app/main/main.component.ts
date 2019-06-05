import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  hide = true;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  onLogIn(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signinUser(email, password);
  }

  onLoginRedirect(){
    this.router.navigate(['home']);
  }

  onSignUpRedirect(){
    this.router.navigate(['signup']);
  }

}
