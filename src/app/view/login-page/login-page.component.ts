import { Component, OnInit } from '@angular/core';
import {UserService} from '../../Controller/service/user.service';
import {User} from '../../Controller/model/user.model';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  get user(): User {
    return this.userService.user;
  }

  get users(): Array<User> {
    return this.userService.users;
  }
  // tslint:disable-next-line:typedef
  public findUserByPasswordAndUsername(u: User){
    return this.userService.findUserByPasswordAndUsername(u);
  }

}
