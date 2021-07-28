import { Component, OnInit } from '@angular/core';
import {UserService} from '../../Controller/service/user.service';
import {EmployeService} from '../../Controller/service/employe.service';
import {Employe} from '../../Controller/model/employe.model';
import {TacheService} from '../../Controller/service/tache.service';
import {TacheEmploye} from '../../Controller/model/tacheEmploye.model';

@Component({
  selector: 'app-employe-page',
  templateUrl: './employe-page.component.html',
  styleUrls: ['./employe-page.component.css']
})
export class EmployePageComponent implements OnInit {

  constructor(private employeService: EmployeService, private userService: UserService, private tacheService: TacheService) { }
  ngOnInit(): void {
     this.employeService.findEmpyUser(this.getInfo());

  }
  vi(){
    return this.ngOnInit();
  }

  get islog(): boolean {
    return this.userService.isLogged;
  }
  getInfo(){
    return  JSON.parse(localStorage.getItem('reference'));
  }
  get employe(): Employe {
    return this.employeService.employe;
  }
  // tslint:disable-next-line:typedef
  showDetailTask() {
    document.getElementById('task-display').style.display = 'block';
  }
  find(employe: Employe){
    return this.tacheService.findTacheByemploye(employe);
  }
  get tacheEmployes(): Array<TacheEmploye> {
    return this.tacheService.tacheEmployes;
  }
  // tslint:disable-next-line:typedef
  closeTask() {
    document.getElementById('task-display').style.display = 'none';
  }
  // tslint:disable-next-line:typedef
  showNotificationDetail() {
    document.getElementById('notification-display').style.display = 'block';
  }
  // tslint:disable-next-line:typedef
  closeNotificationDetail() {
    document.getElementById('notification-display').style.display = 'none';
  }
}
