import { Component, OnInit } from '@angular/core';
import {EmployeService} from '../../Controller/service/employe.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Employe} from '../../Controller/model/employe.model';

@Component({
  selector: 'app-employe-management',
  templateUrl: './employe-management.component.html',
  styleUrls: ['./employe-management.component.css']
})
export class EmployeManagementComponent implements OnInit {

  constructor(private employeService: EmployeService, private modalService: NgbModal) { }
  get employe(): Employe {
    return this.employeService.employe;
  }
  get employes(): Array<Employe> {
    return this.employeService.employes;

  }
  ngOnInit(): void {
    return this.employeService.listAllEmployes();
  }

  // tslint:disable-next-line:typedef
  public delete(employe: Employe){
    return this.employeService.deleteByReference(employe);
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
