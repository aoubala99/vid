import { Component, OnInit } from '@angular/core';
import {EtatProjet} from '../../../../Controller/model/etat-projet.model';
import {EtatProjetService} from '../../../../Controller/service/etat-projet.service';

@Component({
  selector: 'app-projet-statue',
  templateUrl: './projet-statue.component.html',
  styleUrls: ['./projet-statue.component.css']
})
export class ProjetStatueComponent implements OnInit {

  constructor(private etatProjetService: EtatProjetService) { }

  ngOnInit(): void {
    this.etatProjetService.listAllEtatProjet();
  }
  get etat(): EtatProjet {
    return this.etatProjetService.etat;
  }
  get etats(): Array<EtatProjet> {
    return this.etatProjetService.etats;
  }
  // tslint:disable-next-line:typedef
}
