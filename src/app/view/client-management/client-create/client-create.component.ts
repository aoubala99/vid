import { Component, OnInit } from '@angular/core';
import {Client} from '../../../Controller/model/client.model';
import {ClientService} from '../../../Controller/service/client.service';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
  }
  get client(): Client {
    return this.clientService.client;
  }
  closeEmployeCreate() {
    document.getElementById('create').style.display = 'none';
  }
  save(){
    this.clientService.save();
  }
}
