import { Component, OnInit } from '@angular/core';
import {VilleService} from '../../Controller/service/ville.service';
import {Ville} from '../../Controller/model/ville.model';
import {Candidat} from '../../Controller/model/candidat.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ville-list',
  templateUrl: './responsable-page.component.html',
  styleUrls: ['./responsable-page.component.css']
})
export class ResponsablePageComponent implements OnInit {

  constructor(private villeService: VilleService , private modalService: NgbModal) {
  }

  ngOnInit(): void {

    this.villeService.unit();
  }

  get villes(): Array<Ville> {
    return this.villeService.villes;
  }

  // tslint:disable-next-line:typedef
  public delete(ville: Ville) {
    return this.villeService.deleteByReference(ville);
  }

  public findCandidatByeVilleRef(ville: Ville) {
    return this.villeService.findCandidatByeVilleRef(ville);
  }

  public deleteCandidat(index: number, candidat: Candidat){
    return this.villeService.deleteCandidat(index, candidat);
  }
  // tslint:disable-next-line:typedef
  public edit(i: number, v: Ville) {
    this.villeService.edit(i, v);
  }

  get ville(): Ville {
    return this.villeService.ville;
  }
  public update(ville: Ville){
    return this.villeService.update(ville);
  }

  // tslint:disable-next-line:typedef
  openProjetInfo(content){
    this.modalService.open(content, {size: 'xl'});
  }
// tslint:disable-next-line:typedef
 showDiv() {
    document.getElementById('projet-display').style.display = 'block';

  }

  // tslint:disable-next-line:typedef
  closeTab() {
    document.getElementById('projet-display').style.display = 'none';
  }

  // tslint:disable-next-line:typedef
  showDetailTask() {
    document.getElementById('task-display').style.display = 'block';
  }

  // tslint:disable-next-line:typedef
  closeTask() {
    document.getElementById('task-display').style.display = 'none';
  }
  // tslint:disable-next-line:typedef
  showNotificationDetail() {
    document.getElementById('notification-display').style.display = 'block';
  }
  // tslint:disable-next-line:typedef
  closeNotificationDetail() {
    document.getElementById('notification-display').style.display = 'none';
  }
  }
