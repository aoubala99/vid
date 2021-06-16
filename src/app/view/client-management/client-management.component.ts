import { Component, OnInit } from '@angular/core';
import {EmployeService} from '../../Controller/service/employe.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Employe} from '../../Controller/model/employe.model';
import {ClientService} from '../../Controller/service/client.service';
import {Client} from '../../Controller/model/client.model';

@Component({
  selector: 'app-client-management',
  templateUrl: './client-management.component.html',
  styleUrls: ['./client-management.component.css']
})
export class ClientManagementComponent implements OnInit {

  constructor(private modalService: NgbModal, private clientService: ClientService) { }
  ngOnInit(): void {
    return this.clientService.listAllEmployes();
  }
  get client(): Client {
    return this.clientService.client;
  }
  get clients(): Array<Client> {
    return this.clientService.clients;
  }
  delete(client:Client){
    return this.clientService.deleteByReference(client);
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
  save(){
    return  this.clientService.save();
  }
}
