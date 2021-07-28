import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {User} from '../../Controller/model/user.model';
import {ResponsableService} from '../../Controller/service/responsable.service';
import {Responsable} from '../../Controller/model/responsable.model';


@Component({
  selector: 'app-responsable-page',
  templateUrl: './responsable-page.component.html',
  styleUrls: ['./responsable-page.component.css']
})
export class ResponsablePageComponent implements OnInit {

  constructor(private responsableService: ResponsableService , private modalService: NgbModal) {
  }
  get responsable(): Responsable {
    return this.responsableService.responsable;
  }
  getInfo(){
    return  JSON.parse(localStorage.getItem('reference'));
  }

  ngOnInit(): void {
   return this.responsableService.findRespoByUser(this.getInfo());
  }
// tslint:disable-next-line:typedef
 showDiv() {
    document.getElementById('projet-display').style.display = 'block';

  }

  // tslint:disable-next-line:typedef
  closeTab() {
    document.getElementById('projet-display').style.display = 'none';
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
