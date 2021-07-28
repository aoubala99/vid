import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Tache} from '../model/tache.model';
import {Client} from '../model/client.model';
import {TacheEmploye} from '../model/tacheEmploye.model';
import {User} from '../model/user.model';
import {Responsable} from '../model/responsable.model';
import {Employe} from '../model/employe.model';

@Injectable({
  providedIn: 'root'
})
export class TacheService {




  constructor(private http: HttpClient ) { }
  private _index: number;
  private _tache:Tache;
  private _taches:Array<Tache>;


  get tacheEmployes(): Array<TacheEmploye> {
    if (this._tacheEmployes == null){
      this._tacheEmployes = new Array<TacheEmploye>();
    }
    return this._tacheEmployes;
  }

  set tacheEmployes(value: Array<TacheEmploye>) {
    this._tacheEmployes = value;
  }

  private _tacheEmploye: TacheEmploye;
  get tacheEmploye(): TacheEmploye {
    if (this._tacheEmploye==null){
      this._tacheEmploye=new TacheEmploye();
    }
    return this._tacheEmploye;
  }

  set tacheEmploye(value: TacheEmploye) {
    this._tacheEmploye = value;
  }

  private _tacheEmployes:Array<TacheEmploye>;
  get tache(): Tache {
    if (this._tache==null){
      this._tache=new Tache();
    }
    return this._tache;
  }

  set tache(value: Tache) {
    this._tache = value;
  }

  get taches(): Array<Tache> {
    if (this._taches==null){
      this._taches=new Array<Tache>();
    }
    return this._taches;
  }

  set taches(value: Array<Tache>) {
    this._taches = value;
  }
  // tslint:disable-next-line:typedef
  private clone(tache: Tache) {
    const myClone = new Tache();
    myClone.id = tache.id;
    myClone.ref = tache.ref;
    myClone.nom = tache.nom;
    myClone.description = tache.description;
    myClone.dateDebut = tache.dateDebut;
    myClone.dateFin = tache.dateFin;
    myClone.responsable = tache.responsable;
    myClone.etatTache = tache.etatTache;
    myClone.projet = tache.projet;
    return myClone;
  }
  public deleteTemplate(tache: Tache) {
    const index = this.taches.findIndex(u => u.ref === tache.ref);
    if (index !== -1) {
      this.taches.splice(index, 1);
    }
  }
  public findTacheByemploye(employe: Employe) {
    // tslint:disable-next-line:max-line-length
    this.http.get<Array<TacheEmploye>>('http://localhost:8037/Gestion-TacheProjet/tacheEmploye/employe/ref/' + employe.ref).subscribe(
      data => {
        this.tacheEmployes = data;
        console.log(data);
      }, error => {
        console.log('erooooooooooooooor');
      }
    );
  }
}
