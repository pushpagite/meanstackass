import { Injectable } from '@angular/core';
import { Users } from './Users';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CrudService {

    // Node/Express API
    REST_API: string = 'http://localhost:8000/api';
  
    // Http Header
    httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  
    constructor(private httpClient: HttpClient) { }
  
    // Add User
    AddUser(data: Users): Observable<any> {
      let API_URL = `${this.REST_API}/add-user`;
      return this.httpClient.post(API_URL, data)
        .pipe(
          catchError(this.handleError)
        )
    }
  


    // Get all objects
  GetUsers() {
    return this.httpClient.get<Users[]>(`${this.REST_API}`);
  } 
    //returns single user
  GetUser(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
          return res || {}
        }),
        catchError(this.handleError)
      )
  }

    // Update user
    updateUser(id:any, data:any): Observable<any> {
      let API_URL = `${this.REST_API}/${id}`;
      return this.httpClient.put(API_URL, data, { headers: this.httpHeaders })
        .pipe(
          catchError(this.handleError)
        )
    }


  // Delete User
  deleteUser(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/${id}`;
    return this.httpClient.delete(API_URL, { headers: this.httpHeaders}).pipe(
        catchError(this.handleError)
      )
  }


  //login
  loginData(data:Users): Observable<any> {
    console.log('login data'+data.username);
    
    let LOGIN_API_URL = `${this.REST_API}/login`;
    return this.httpClient.post(LOGIN_API_URL,data)
        .pipe(
            catchError(this.handleError)
        )
  }
  
    // Error 
    handleError(error: HttpErrorResponse) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // Handle client error
        errorMessage = error.error.message;
      } else {
        // Handle server error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
    }
  
  }
  
