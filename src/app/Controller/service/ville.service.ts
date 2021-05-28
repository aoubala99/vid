import { Injectable } from '@angular/core';
import {Ville} from '../model/ville.model';
import {HttpClient} from '@angular/common/http';
import {Candidat} from '../model/candidat.model';

@Injectable({
  providedIn: 'root'
})
export class VilleService {


  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:variable-name
  private _ville: Ville;
  // tslint:disable-next-line:variable-name
  private _villes: Array<Ville>;
  // tslint:disable-next-line:variable-name
  private _index: number;
  // tslint:disable-next-line:variable-name
  private _candidat: Candidat;
  get candidat(): Candidat {
    if (this._candidat == null) {
      this._candidat = new Candidat();
    }
    return this._candidat;
  }

  set candidat(value: Candidat) {
    this._candidat = value;
  }

  get ville(): Ville {
    if (this._ville == null) {
      this._ville = new Ville();
    }
    return this._ville;
  }

  set ville(value: Ville) {
    this._ville = value;
  }

  get villes(): Array<Ville> {
    if (this._villes == null) {
      this._villes = new Array<Ville>();
    }
    return this._villes;
  }

  set villes(value: Array<Ville>) {
    this._villes = value;
  }

  // tslint:disable-next-line:typedef
  public unit() {
    this.http.get<Array<Ville>>('http://localhost:8036/agence_mariage/ville/').subscribe(
      data => {
        this.villes = data;
      }, error => {
        console.log(error);
      }
    );
  }

  // tslint:disable-next-line:typedef align
  public edit(i: number, v: Ville) {
    this.ville = this.clone(v);
    this._index = i;
  }
  public update(ville: Ville){
    this.http.put<Ville>('http://localhost:8036/agence_mariage/ville/update/',this.ville ).subscribe(
      data => {
        this.ville = this.clone(ville);
      },
      error => {
        console.log('errooooooor');
      }
    );
  }

  // tslint:disable-next-line:typedef
  public save() {
    this.http.post('http://localhost:8036/agence_mariage/ville/', this.ville).subscribe(
      data => {
        if (data > 0) {
          this.villes.push(this.clone(this.ville));
          this.ville = null;
          console.log(this.ville);
        } else {
          alert('the element youre about to insert already exist ');
        }
      },
      error => {
        console.log('errooooooor');
      }
    );

  }

  // tslint:disable-next-line:typedef
  private clone(ville: Ville) {
    const myClone = new Ville();
    myClone.id = ville.id;
    myClone.reference = ville.reference;
    myClone.nom = ville.nom;
    myClone.codePostal = ville.codePostal;
    return myClone;
  }

  // tslint:disable-next-line:typedef
  public addCandidat() {
    this.ville.candidats.push(this.cloneCandidat(this.candidat));
    this.candidat = null;

  }

  // tslint:disable-next-line:typedef
  private cloneCandidat(candidat: Candidat) {
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

  public validate(): boolean {
    return this.ville.candidats.length > 0;
  }

  // tslint:disable-next-line:typedef
  public findCandidatByeVilleRef(ville: Ville) {
    this.http.get<Array<Candidat>>('http://localhost:8036/agence_mariage/candidat/ville/reference/ref/' + ville.reference).subscribe(
      data => {
        this.ville.candidats = data;
      },
      error => {
        console.log('errooooooor');
      }
    );
  }

  public deleteTemplate(ville: Ville) {
    const index = this.villes.findIndex(v => v.reference === ville.reference);
    if (index !== -1) {
      this.villes.splice(index, 1);
    }
  }

  // tslint:disable-next-line:typedef
  public deleteByReference(ville: Ville) {
    this.http.delete<number>('http://localhost:8036/agence_mariage/ville/reference/ref/' + ville.reference).subscribe(
      data => {
        console.log('num of elem deleted' + data);
        this.deleteTemplate(ville);
      }
    );
  }

  // public deleteTemplateCandidat(candidat: Candidat) {
  //   const index = this.ville.candidats.findIndex(c => c.cin === candidat.cin);
  //   if (index !== -1) {
  //     this.villes.splice(index, 1);
  //   }
  // }

  // tslint:disable-next-line:typedef
  public deleteCandidat(index: number, candidat: Candidat ) {
  //  const index = this.ville.candidats.findIndex(c => c.cin === candidat.cin);
    this.http.delete<number>('http://localhost:8036/agence_mariage/candidat/cin/cin/' + candidat.cin).subscribe(
      data => {
        if( data > 0){
          this.ville.candidats.splice(index, 1);
          // console.log('num of elem deleted' + data);
          // this.deleteTemplateCandidat(candidat);
        }
      }
    );
  }
}
