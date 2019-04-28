import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  hide = true;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLoginRedirect(){
    this.router.navigate(['home']);
  }

  onSignUpRedirect(){
    this.router.navigate(['signup']);
  }

}
