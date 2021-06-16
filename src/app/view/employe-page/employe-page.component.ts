import { Component, OnInit } from '@angular/core';
import {Ville} from '../../Controller/model/ville.model';
import {VilleService} from '../../Controller/service/ville.service';
import {Candidat} from '../../Controller/model/candidat.model';
import {UserService} from '../../Controller/service/user.service';

@Component({
  selector: 'app-employe-page',
  templateUrl: './employe-page.component.html',
  styleUrls: ['./employe-page.component.css']
})
export class EmployePageComponent implements OnInit {

  constructor(private villeService: VilleService, private userService: UserService) { }

  ngOnInit(): void {
    console.log(this.islog);
  }
  get islog(): boolean {
    return this.userService.isLogged;
  }
  get ville(): Ville{
    return this.villeService.ville;
  }
  get candidat(): Candidat{
   return  this.villeService.candidat;
  }
  // tslint:disable-next-line:typedef
  public save(){
    return this.villeService.save();
  }
  // tslint:disable-next-line:typedef
  public  addCandidat(){
    this.villeService.addCandidat();
  }
  // tslint:disable-next-line:typedef
  public  validate() {
   return  this.villeService.validate();
  }
  // tslint:disable-next-line:typedef
  showDetailTask() {
    document.getElementById('task-display').style.display = 'block';
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
