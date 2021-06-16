import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Chef} from '../model/chef.model';
import {User} from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class ChefService {


  constructor(private http: HttpClient) { }

  private _chef: Chef;
  private _chefs: Array<Chef>;
  private _index: number;

  get chef(): Chef {
    if (this._chef==null){
      this._chef = new Chef();
    }
    return this._chef;
  }

  set chef(value: Chef) {
    this._chef = value;
  }
  get chefs(): Array<Chef> {
    if (this._chefs == null){
      this._chefs = new Array<Chef>();
    }
    return this._chefs;
  }

  set chefs(value: Array<Chef>) {
    this._chefs = value;
  }
  public edit(i: number, u: Chef) {
    this.chef = this.clone(u);
    this._index = i;
  }
  private clone(chef: Chef) {
    const myClone = new Chef();
    myClone.id = chef.id;
    myClone.ref = chef.ref;
    myClone.nom = chef.nom;
    myClone.prenom = chef.prenom;
    myClone.address = chef.address;
    myClone.mail = chef.mail;
    return myClone;
  }
  public deleteTemplate(chef: Chef) {
    const index = this.chefs.findIndex(u => u.ref === chef.ref);
    if (index !== -1) {
      this.chefs.splice(index, 1);
    }
  }
  public deleteByRef(chef: Chef) {
    this.http.delete<number>('http://localhost:8037/Gestion-TacheProjet/ChefProjet/ref/' + chef.ref).subscribe(
      data => {
        console.log('num of elem deleted' + data);
        this.deleteTemplate(chef);
      }
    );
  }
  // tslint:disable-next-line:typedef
  public findAll(){
    this.http.get<Array<Chef>>('http://localhost:8037/Gestion-TacheProjet/ChefProjet/').subscribe(
      data => {
        this.chefs = data;
        console.log(data);
      }, error => {
        console.log('error');
      }
    );
  }
}
