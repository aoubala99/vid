import { Injectable } from '@angular/core';
import {Employe} from '../model/employe.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Responsable} from '../model/responsable.model';
import {newArray} from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class ResponsableService {

  constructor(private http: HttpClient) { }
  // tslint:disable-next-line:variable-name
  private _responsable: Responsable;
  // tslint:disable-next-line:variable-name
  private _responsables: Array<Responsable>;
  // tslint:disable-next-line:variable-name

  private _index: number;
  private employeUrl = 'http://localhost:8037/Gestion-TacheProjet/employe/';

  get responsable(): Responsable {
    if (this._responsable == null){
      this._responsable = new Responsable();
    }
    return this._responsable;
  }

  set responsable(value: Responsable) {
    this._responsable = value;
  }

  get responsables(): Array<Responsable> {
    if (this._responsables == null){
      this._responsables = new Array<Responsable>();
    }
    return this._responsables;
  }

  set responsables(value: Array<Responsable>) {
    this._responsables = value;
  }

// tslint:disable-next-line:typedef align
  public edit(i: number, r: Responsable) {
    this.responsable = this.clone(r);
    this._index = i;
  }
  // tslint:disable-next-line:typedef

  // tslint:disable-next-line:typedef
  private clone(responsable: Responsable) {
    const myClone = new Responsable();
    myClone.id = responsable.id;
    myClone.ref = responsable.ref;
    myClone.nom = responsable.nom;
    myClone.prenom = responsable.prenom;
    myClone.address = responsable.address;
    myClone.mail = responsable.mail;
    myClone.telephone = responsable.telephone;
    return myClone;
  }



  // tslint:disable-next-line:typedef
  public deleteTemplate(responsable: Responsable) {
    const index = this.responsables.findIndex(v => v.ref === responsable.ref);
    if (index !== -1) {
      this.responsables.splice(index, 1);
    }
  }

  // tslint:disable-next-line:typedef
  public deleteByReference(responsable: Responsable) {
    this.http.delete<number>('http://localhost:8037/Gestion-TacheProjet/Responsable/ref/' + responsable.ref).subscribe(
      data => {
        console.log('num of elem deleted' + data);
        this.deleteTemplate(responsable);
      }
    );
  }
  // tslint:disable-next-line:typedef
  public listAllResponsables() {
    this.http.get<Array<Responsable>>('http://localhost:8037/Gestion-TacheProjet/Responsable/').subscribe(
      data => {
        this.responsables = data;
        console.log(data);
      }, error => {
        console.log(error);
      }
    );
  }
}
