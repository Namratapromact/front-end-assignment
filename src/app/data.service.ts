import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

import { User } from "./User/user.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  /*Getting all users from the server*/
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`https://strapi-test.promactinfo.com/users`)

  }

  /*Getting all posts from the server*/
  getPosts(): Observable<User[]> {
    return this.http.get<User[]>(`https://strapi-test.promactinfo.com/posts`)

  }

  /*Getting users by its id from the server*/
  getUsersbyId(id: number): Observable<User> {
      if (id == 0) {
      return of(this.initializeUser());
    }
    else {
      return this.http.get<User>(`https://strapi-test.promactinfo.com/users/${id}`).pipe(
          tap(data => console.log('getUser: ' + JSON.stringify(data)))
        );
    }
  }

  private initializeUser(): User {
    return {
      id:null,
      email: null,
      username: null,
      password: null
    };
  }

  /*Update user code*/
  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`https://strapi-test.promactinfo.com/users/${user.id}`, user, {
      headers: new HttpHeaders({
        'Accept': 'application/json'
      })
    })
  }

   /*Add new user code*/
  addUser(newUser: User): Observable<User> {
    return this.http.post<User>('https://strapi-test.promactinfo.com/auth/local/register', newUser, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  /*Delete user code*/
  deleteUser(id: number): Observable<{}> {
    return this.http.delete<User>(`https://strapi-test.promactinfo.com/users/${id}`);
  }

}
