import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Candidat} from '../model/candidat.model';
import {User} from '../model/user.model';
import {newArray} from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:variable-name
  private _user: User;
  // tslint:disable-next-line:variable-name
  private _users: Array<User>;
  // tslint:disable-next-line:variable-name
  private _index: number;
  // tslint:disable-next-line:variable-name
  private _userForShow: User;


  get userForShow(): User {
    if (this._userForShow == null){
      this._userForShow = new User();
    }
    return this._userForShow;
  }

  set userForShow(value: User) {
    this._userForShow = value;
  }

  get user(): User {
    if (this._user == null){
      this._user = new User();
    }
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }

  get users(): Array<User> {
    if (this._users == null){
      this._users = new Array<User>();
    }
    return this._users;
  }

  set users(value: Array<User>) {
    this._users = value;
  }

// tslint:disable-next-line:typedef
  // tslint:disable-next-line:typedef align
  public edit(i: number, u: User) {
    this.user = this.clone(u);
    this._index = i;
  }
  // tslint:disable-next-line:typedef
  public save() {
    this.http.post('http://localhost:8037/Gestion-TacheProjet/User', this.user).subscribe(
      data => {
        if (data > 0) {
          this.users.push(this.clone(this.user));
          this.user = null;
          console.log(this.user);
        } else {
          alert('the element youre about to insert already exist ');
        }
      },
      error => {
        console.log('errooooooor');
      }
    );

  }

  // tslint:disable-next-line:typedef
  private clone(user: User) {
    const myClone = new User();
    myClone.id = user.id;
    myClone.ref = user.ref;
    myClone.username = user.username;
    myClone.password = user.password;
    myClone.role = user.role;
    return myClone;
  }


  // tslint:disable-next-line:typedef
  public findUserByPasswordAndUsername(user: User) {
    // tslint:disable-next-line:max-line-length
    this.http.get<User>('http://localhost:8037/Gestion-TacheProjet/User/login/username/' + user.username + '/password/' + user.password).subscribe(
      data => {
        this.user = data;
        console.log(data);
      },
      error => {
        console.log('errooooooor');
      }
    );
  }

  // tslint:disable-next-line:typedef
  public deleteTemplate(user: User) {
    const index = this.users.findIndex(u => u.ref === user.ref);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }

  // tslint:disable-next-line:typedef
  public deleteByRef(user: User) {
    this.http.delete<number>('http://localhost:8037/Gestion-TacheProjet/User/ref/' + user.ref).subscribe(
      data => {
        console.log('num of elem deleted' + data);
        this.deleteTemplate(user);
      }
    );
  }
  public findAll(){
    this.http.get<Array<User>>('http://localhost:8037/Gestion-TacheProjet/User/').subscribe(
      data => {
        this.users = data;
        console.log(data);
      }, error => {
        console.log('error');
      }
  );
  }


}
