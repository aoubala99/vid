import { Injectable } from '@angular/core';
import {Client} from '../model/client.model';
import {HttpClient} from '@angular/common/http';
import {EtatProjet} from '../model/etat-projet.model';

@Injectable({
  providedIn: 'root'
})
export class EtatProjetService {

  constructor(private http: HttpClient) { }
  private _etat: EtatProjet;
  private _etats: Array<EtatProjet>;
  private _index: number;

  get etat(): EtatProjet {
    if (this._etat == null){
      this._etat = new EtatProjet();
    }
    return this._etat;
  }

  set etat(value: EtatProjet) {
    this._etat = value;
  }

  get etats(): Array<EtatProjet> {
    if (this._etats == null){
      this._etats = new Array<EtatProjet>();
    }
    return this._etats;
  }

  set etats(value: Array<EtatProjet>) {
    this._etats = value;
  }

// tslint:disable-next-line:typedef
  private clone(etat: EtatProjet) {
    const myClone = new EtatProjet();
    myClone.id = etat.id;
    myClone.ref = etat.ref;
    myClone.statue = etat.statue;
    return myClone;
  }
  // tslint:disable-next-line:typedef
  public deleteTemplate(etat: EtatProjet) {
    const index = this.etats.findIndex(v => v.ref === etat.ref);
    if (index !== -1) {
      this.etats.splice(index, 1);
    }
  }
  // tslint:disable-next-line:typedef
  public listAllEtatProjet() {
    this.http.get<Array<EtatProjet>>('http://localhost:8037/Gestion-TacheProjet/etatProjet/').subscribe(
      data => {
        this.etats = data;
        console.log(data);
      }, error => {
        console.log(error);
      }
    );
  }
}
