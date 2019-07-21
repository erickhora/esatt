import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLogoRedirect(){
    this.router.navigate(['home']);
  }

  onNewProjectRedirect(){
    this.router.navigate(['home/new-project']);
  }

  onHistoryRedirect(){
    this.router.navigate(['home/budgets']);
  }

  onLogout(){
  }
}
