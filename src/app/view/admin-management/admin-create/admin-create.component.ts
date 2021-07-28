import { Component, OnInit } from '@angular/core';
import {Admin} from '../../../Controller/model/admin.model';
import {AdminService} from '../../../Controller/service/admin.service';

@Component({
  selector: 'app-admin-create',
  templateUrl: './admin-create.component.html',
  styleUrls: ['./admin-create.component.css']
})
export class AdminCreateComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
  }
  save(){
    this.adminService.save();
  }
  get admin(): Admin {
    return this.adminService.admin;
  }
  get admins(): Array<Admin> {
    return this.adminService.admins;
  }
  closeEmployeCreate() {
    document.getElementById('create').style.display = 'none';
  }
}
