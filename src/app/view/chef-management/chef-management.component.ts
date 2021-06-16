import { Component, OnInit } from '@angular/core';
import {EmployeService} from '../../Controller/service/employe.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Employe} from '../../Controller/model/employe.model';
import {ChefService} from '../../Controller/service/chef.service';
import {Chef} from '../../Controller/model/chef.model';

@Component({
  selector: 'app-chef-management',
  templateUrl: './chef-management.component.html',
  styleUrls: ['./chef-management.component.css']
})
export class ChefManagementComponent implements OnInit {

  constructor( private chefService: ChefService ) { }
  ngOnInit(): void {
    this.chefService.findAll();
  }
  get chef(): Chef {
    return this.chefService.chef;
  }
  get chefs(): Array<Chef> {
    return this.chefService.chefs;
  }
  delete(chef: Chef){
    this.chefService.deleteByRef(chef);
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
