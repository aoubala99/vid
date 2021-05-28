import { Component, OnInit } from '@angular/core';
import {Ville} from '../Controller/model/ville.model';
import {VilleService} from '../Controller/service/ville.service';

@Component({
  selector: 'app-villes',
  templateUrl: './villes.component.html',
  styleUrls: ['./villes.component.css']
})
export class VillesComponent implements OnInit {


  constructor() { }


  ngOnInit(): void {
  }

}
