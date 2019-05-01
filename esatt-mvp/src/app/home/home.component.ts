import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private modalService: NgbModal) { }

  ngOnInit() {
  }

  onProjectRedirect(){
    this.router.navigate(['home/new-project']);
  }

  openSm(content) {
    this.modalService.open(content, { size: 'sm' });
  }

}
