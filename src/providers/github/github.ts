import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubProvider {

  constructor(public http: Http) {
    console.log('Hello GithubProvider Provider');
  }

  getRepo() {
    return this.http.get('https://api.github.com/users/ridwan85/repos')
      .map(res => res.json());
  }

  getUser() {
    return this.http.get('https://api.github.com/users/ridwan85')
      .map(res => res.json());
  }

}