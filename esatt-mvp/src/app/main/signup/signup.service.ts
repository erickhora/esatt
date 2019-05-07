import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { User } from 'src/models/user.model';

@Injectable()
export class SignupService {
  constructor(private http: Http){}

  storeUsers(users: User[]){
    return this.http.post('https://esatt-db-test.firebaseio.com/data.json', users);
  }
}
