import { Component, OnInit } from '@angular/core';
import {CandidatService} from '../../Controller/service/candidat.service';
import {Candidat} from '../../Controller/model/candidat.model';

@Component({
  selector: 'app-candidat-list',
  templateUrl: './candidat-list.component.html',
  styleUrls: ['./candidat-list.component.css']
})
export class CandidatListComponent implements OnInit {


  constructor(private candidatService: CandidatService) { }

  ngOnInit(): void {
    this.candidatService.init();
  }
  get candidats(): Array<Candidat> {
    return this.candidatService.candidats;
  }

  // tslint:disable-next-line:typedef
   public delete(i: number) {
    this.candidats.splice(i, 1);
  }

  public edit(i: number, c: Candidat) {
    this.candidatService.edit(i, c);
  }
}
