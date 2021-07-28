import { Component, OnInit } from '@angular/core';
import {EmployeService} from '../../Controller/service/employe.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Employe} from '../../Controller/model/employe.model';
import {ResponsableService} from '../../Controller/service/responsable.service';
import {Responsable} from '../../Controller/model/responsable.model';
import {User} from '../../Controller/model/user.model';

@Component({
  selector: 'app-responsable-management',
  templateUrl: './responsable-management.component.html',
  styleUrls: ['./responsable-management.component.css']
})
export class ResponsableManagementComponent implements OnInit {

  constructor(private responsableService: ResponsableService ) { }
  ngOnInit(): void {
    return this.responsableService.listAllResponsables();
  }

  get responsable(): Responsable {
    return this.responsableService.responsable;
  }
  get responsables(): Array<Responsable> {
    return this.responsableService.responsables;
  }

   delete(responsable: Responsable ){
    this.responsableService.deleteByReference(responsable);
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
