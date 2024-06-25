import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { SingleUserResponse, User } from '../interfaces/user-request.interface';

import {  Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  private htpp = inject( HttpClient )
  private baseUrl = 'https://reqres.in/api/users';

  constructor() { }

  getUserById( id: number ): Observable<User> {

    return this.htpp.get<SingleUserResponse>(` ${ this.baseUrl }/${ id } `)
      .pipe(
        map( reponse => reponse.data ),
        tap( console.log )
      )

  }

}
