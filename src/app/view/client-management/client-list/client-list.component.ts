import { Component, OnInit } from '@angular/core';
import {Client} from '../../../Controller/model/client.model';
import {ClientService} from '../../../Controller/service/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  constructor( private clientService: ClientService) { }

  ngOnInit(): void {
    return this.clientService.listAllEmployes();

  }
  get clients(): Array<Client> {
    return this.clientService.clients;
  }
  delete(client: Client){
    return this.clientService.deleteByReference(client);
  }
  // tslint:disable-next-line:typedef

  // tslint:disable-next-line:typedef
  showCreateEmploye() {
    document.getElementById('create').style.display = 'block';
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
