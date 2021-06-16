import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employe} from '../model/employe.model';
import {Observable} from 'rxjs';
import {UserService} from './user.service';



@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  constructor(private http: HttpClient, private userSrevice: UserService) { }
  // tslint:disable-next-line:variable-name
  private _employe: Employe;
  // tslint:disable-next-line:variable-name
  private _employes: Array<Employe>;
  // tslint:disable-next-line:variable-name

  private _index: number;
  private employeUrl = 'http://localhost:8037/Gestion-TacheProjet/employe/';
  get employe(): Employe {
    if (this._employe == null){
      this._employe = new Employe();
    }
    return this._employe;
  }

  set employe(value: Employe) {
    this._employe = value;
  }
  get employes(): Array<Employe> {
    return this._employes;
  }

  set employes(value: Array<Employe>) {
    if (this._employes == null){
      this._employes = new Array<Employe>();
    }
    this._employes = value;
  }
  // tslint:disable-next-line:typedef align
  public edit(i: number, e: Employe) {
    this.employe = this.clone(e);
    this._index = i;
  }
  // tslint:disable-next-line:typedef

  saveEmploye(employe: Employe): Observable<any>{
    return this.http.post(this.employeUrl, employe);
  }

  // tslint:disable-next-line:typedef
  private clone(employe: Employe) {
    const myClone = new Employe();
    myClone.id = employe.id;
    myClone.ref = employe.ref;
    myClone.nom = employe.nom;
    myClone.prenom = employe.prenom;
    myClone.address = employe.address;
    myClone.mail = employe.mail;
    myClone.telephone = employe.telephone;
    myClone.dateEmbauche = employe.dateEmbauche;
    return myClone;
  }



  // tslint:disable-next-line:typedef
  public deleteTemplate(employe: Employe) {
    const index = this.employes.findIndex(v => v.ref === employe.ref);
    if (index !== -1) {
      this.employes.splice(index, 1);
    }
  }

  // tslint:disable-next-line:typedef
  public deleteByReference(employe: Employe) {
    this.http.delete<number>('http://localhost:8037/Gestion-TacheProjet/employe/ref/' + employe.ref).subscribe(
      data => {
        console.log('num of elem deleted' + data);
        this.deleteTemplate(employe);
      }
    );
  }
  // tslint:disable-next-line:typedef
  public listAllEmployes() {
    this.http.get<Array<Employe>>('http://localhost:8037/Gestion-TacheProjet/employe/').subscribe(
      data => {
        this.employes = data;
        console.log(data);
      }, error => {
        console.log(error);
      }
    );
  }
}
