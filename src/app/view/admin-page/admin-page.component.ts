import { Component, OnInit } from '@angular/core';
import {Employe} from '../../Controller/model/employe.model';
import {EmployeService} from '../../Controller/service/employe.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AdminService} from '../../Controller/service/admin.service';
import {Admin} from '../../Controller/model/admin.model';



@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.adminService.findAdminByUser(this.getInfo());
  }

  getInfo(){
    return  JSON.parse(localStorage.getItem('reference'));
  }
  get admin(): Admin {
    return this.adminService.admin;
  }
  get admins(): Array<Admin> {
    return this.adminService.admins;
  }
}


