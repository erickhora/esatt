import { Injectable } from "@angular/core";
import { Headers, Http } from '@angular/http';
import { User } from 'src/app/models/user.model';

@Injectable()
export class SignupService {
  constructor(private http: Http){}

  storeUsers(users: User[]){
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('https://esatt-db-test.firebaseio.com/users.json', users, {headers: headers});
  }

  getUsers(){
    return this.http.get('https://esatt-db-test.firebaseio.com/users.json');
  }
}
