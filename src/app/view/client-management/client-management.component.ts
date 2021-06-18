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

  constructor(private modalService: NgbModal) {
  }

  ngOnInit(): void {


  }
}
