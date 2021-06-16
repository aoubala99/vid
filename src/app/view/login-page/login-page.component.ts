import { Component, OnInit } from '@angular/core';
import {UserService} from '../../Controller/service/user.service';
import {User} from '../../Controller/model/user.model';
import {Tool} from '../../Controller/model/tool.model';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  get isLogged(): boolean {
    return this.userService.isLogged;
  }
  get user(): User {
    return this.userService.user;
  }
  set user(value: User) {
    this.userService.user = value;
  }
  get users(): Array<User> {
    return this.userService.users;
  }
  // tslint:disable-next-line:typedef
   findUserByPasswordAndUsername(user: User){
    console.log(user.username);
     this.userService.findUserByPasswordAndUsername(user);

  }
  get tool(): Tool {
    return this.userService.tool;
  }
}
