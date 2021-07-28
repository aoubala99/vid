import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../Controller/service/admin.service';
import {Admin} from '../../../Controller/model/admin.model';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.listAllEmployes();
  }
  get admin(): Admin {
    return this.adminService.admin;
  }
  get admins(): Array<Admin> {
    return this.adminService.admins;
  }
  delete(admin: Admin){
    this.adminService.deleteByReference(admin);
  }
  closeEmployeEdit() {
    document.getElementById('editEmployeeModal').style.display = 'none';
  }
  showCreateEmploye() {
    document.getElementById('create').style.display = 'block';
  }
  showWarning() {
    document.getElementById('deleteEmployeeModal').style.display = 'block';
  }
  closeWarning() {
    document.getElementById('deleteEmployeeModal').style.display = 'none';
  }

  showEditEmploye() {
    document.getElementById('editEmployeeModal').style.display = 'block';
  }
  public update(index: number, admin: Admin) {
    this.adminService.edit(index, admin);
  }
}
