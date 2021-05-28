import { Component, OnInit } from '@angular/core';
import {CandidatService} from '../Controller/service/candidat.service';
import {Candidat} from '../Controller/model/candidat.model';

@Component({
  selector: 'app-candidats',
  templateUrl: './candidats.component.html',
  styleUrls: ['./candidats.component.css']
})
export class CandidatsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
