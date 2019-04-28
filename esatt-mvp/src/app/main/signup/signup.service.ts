import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SignupService {
  constructor(private http: Http){}
  storeUsers(users: any[]){
    return this.http.post('https://esatt-db-test.firebaseio.com/user.json', users);
  }
}
