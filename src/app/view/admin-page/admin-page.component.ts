import { Component, OnInit } from '@angular/core';
import {Employe} from '../../Controller/model/employe.model';
import {EmployeService} from '../../Controller/service/employe.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

declare var $: any;
@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
