import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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
  projetCreationClose() {
    document.getElementById('projet-creation').style.display = 'none';
  }
  projetCreationOpen() {
    document.getElementById('projet-creation').style.display = 'block';
  }

  projetUpdateClose() {
    document.getElementById('update-projet').style.display = 'none';
  }
  projetUpdateShow() {
    document.getElementById('update-projet').style.display = 'block';
  }

  closeUpdateTask() {
    document.getElementById('taskUpdate').style.display = 'none';
  }
  openUpdateTask() {
    document.getElementById('taskUpdate').style.display = 'block';
  }

  closeCreationTask() {
    document.getElementById('task-creation').style.display = 'none';
  }
  // tslint:disable-next-line:typedef
  openCreationTask() {
    document.getElementById('task-creation').style.display = 'block';
  }
}
