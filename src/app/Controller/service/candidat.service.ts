import { Injectable } from '@angular/core';
import {Candidat} from '../model/candidat.model';
import {Ville} from '../model/ville.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {

  constructor(private http: HttpClient ) { }
  // tslint:disable-next-line:variable-name
  private _candidat: Candidat;
  // tslint:disable-next-line:variable-name
  private _candidats: Array<Candidat>;
  private _index: number;
  get candidat(): Candidat {
    if (this._candidat == null) {
      this._candidat = new Candidat();
    }
    return this._candidat;
  }

  set candidat(value: Candidat) {
    this._candidat = value;
  }

  get candidats(): Array<Candidat> {
    if (this._candidats == null) {
      this._candidats = new Array<Candidat>();
    }
    return this._candidats;
  }

  set candidats(value: Array<Candidat>) {
    this._candidats = value;
  }



  // tslint:disable-next-line:typedef
  public init() {
    this.http.get<Array<Candidat>>('http://localhost:8036/agence_mariage/candidat/').subscribe(
      data => {
        this.candidats = data;
      }, error => {
        console.log(error);
      }
    );
  }
  // tslint:disable-next-line:typedef
  public save() {
    if (this.candidat.id == null){
    this.candidats.push(this.clone(this.candidat)); }
    else{
      this.candidats[this._index] = this.clone(this.candidat);
    }
    this.candidat = null;

  }
  // tslint:disable-next-line:typedef
  private clone(candidat: Candidat) {
    const myClone = new Candidat();
    myClone.id = candidat.id;
    myClone.mail = candidat.mail;
    myClone.profession = candidat.profession;
    myClone.description = candidat.description;
    myClone.bithday = candidat.bithday;
    myClone.photos = candidat.photos;
    myClone.numtelephone = candidat.numtelephone;
    myClone.prenom = candidat.prenom;
    myClone.cin = candidat.cin;
    myClone.nom = candidat.nom;
    myClone.address = candidat.address;
    return myClone;
  }
  // tslint:disable-next-line:typedef
  public edit(i: number, c: Candidat){
    this.candidat = this.clone(c);
    this._index = i;
  }

}
