import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'esatt-mvp';

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyBZtKpRtnBuBJ7Ubh9rlIwBpIMDUy7mLhg",
      authDomain: "esatt-db-test.firebaseapp.com",
      databaseURL: "https://esatt-db-test.firebaseio.com/"
    });
  }
}
