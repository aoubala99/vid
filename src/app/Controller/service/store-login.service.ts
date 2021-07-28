import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreLoginService {

  constructor() { }

  store(token: any, user: any){
   localStorage.setItem('token', token);
   localStorage.setItem('user', JSON.stringify(user));
  }
}
