import { Component, OnInit } from '@angular/core';
import {EmployeService} from '../../Controller/service/employe.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Employe} from '../../Controller/model/employe.model';
import {UserService} from '../../Controller/service/user.service';
import {User} from '../../Controller/model/user.model';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  constructor( private modalService: NgbModal, private userService: UserService) { }
  ngOnInit(): void {
    return this.userService.findAll();
  }
  get user(): User {
    return this.userService.user;
  }
  get userForShow(): User {
    return this.userService.userForShow;
  }
  get users(): Array<User> {
    return this.userService.users;
  }
  // tslint:disable-next-line:typedef
  public delete(user: User){
    return this.userService.deleteByRef(user);
  }
  // tslint:disable-next-line:typedef

  // tslint:disable-next-line:typedef
  showCreateEmploye() {
    document.getElementById('create').style.display = 'block';
  }
  closeEmployeCreate() {
    document.getElementById('create').style.display = 'none';
  }
  showEditEmploye() {
    document.getElementById('editEmployeeModal').style.display = 'block';
  }
  closeEmployeEdit() {
    document.getElementById('editEmployeeModal').style.display = 'none';
  }

  showWarning() {
    document.getElementById('deleteEmployeeModal').style.display = 'block';
  }
  closeWarning() {
    document.getElementById('deleteEmployeeModal').style.display = 'none';
  }
}
