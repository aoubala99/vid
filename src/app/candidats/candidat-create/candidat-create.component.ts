import { Component, OnInit } from '@angular/core';
import {CandidatService} from '../../Controller/service/candidat.service';
import {Candidat} from '../../Controller/model/candidat.model';

@Component({
  selector: 'app-candidat-create',
  templateUrl: './candidat-create.component.html',
  styleUrls: ['./candidat-create.component.css']
})
export class CandidatCreateComponent implements OnInit {

  constructor(private candidatService: CandidatService) {
  }

  ngOnInit(): void {
  }

  get candidat(): Candidat {
    return this.candidatService.candidat;
  }

  // tslint:disable-next-line:typedef
  public save() {
    return this.candidatService.save();
  }
}

