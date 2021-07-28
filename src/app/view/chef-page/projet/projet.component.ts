import { Component, OnInit } from '@angular/core';
import {EtatProjetService} from '../../../Controller/service/etat-projet.service';
import {EtatProjet} from '../../../Controller/model/etat-projet.model';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
