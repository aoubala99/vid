import { Component, OnInit } from '@angular/core';
import {EmployeService} from '../../Controller/service/employe.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Employe} from '../../Controller/model/employe.model';

@Component({
  selector: 'app-admin-management',
  templateUrl: './admin-management.component.html',
  styleUrls: ['./admin-management.component.css']
})
export class AdminManagementComponent implements OnInit {

  constructor( private modalService: NgbModal) { }

  ngOnInit(): void {
  }

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
