import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public top = 10;
  private url = 'https://randomuser.me/api/';

  constructor(private http: HttpClient) {}

  public getUsers(): Observable<unknown> {
    return this.http.get(`${this.url}?results=${this.top}`);
  }
}
