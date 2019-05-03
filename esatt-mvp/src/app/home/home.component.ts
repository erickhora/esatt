import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  breakpoint: number;

  constructor(private router: Router, private modalService: NgbModal) { }

  ngOnInit() {
    if(window.innerWidth <= 768) {
      this.breakpoint = 1;
    } else {
      this.breakpoint = 2;
    }
  }

  onResize(event){
    if(event.target.innerWidth <= 768) {
      this.breakpoint = 1;
    } else {
      this.breakpoint = 2;
    }
  }

  onProjectRedirect(){
    this.router.navigate(['home/new-project']);
  }

  openSm(content) {
    this.modalService.open(content, { size: 'sm' });
  }


}
