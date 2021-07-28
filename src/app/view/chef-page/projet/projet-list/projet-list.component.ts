import { Component, OnInit } from '@angular/core';
import {EtatProjetService} from '../../../../Controller/service/etat-projet.service';

@Component({
  selector: 'app-projet-list',
  templateUrl: './projet-list.component.html',
  styleUrls: ['./projet-list.component.css']
})
export class ProjetListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


}
