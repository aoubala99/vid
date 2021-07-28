import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Client} from '../model/client.model';
import {Admin} from '../model/admin.model';
import {Responsable} from '../model/responsable.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  private _admin: Admin;
  private _admins: Array<Admin>;
  private _index: number;

  get admin(): Admin {
    if (this._admin==null){
      this._admin=new Admin();
    }
    return this._admin;
  }

  set admin(value: Admin) {
    this._admin = value;
  }

  get admins(): Array<Admin> {
    if (this._admins==null){
      this._admins=new Array<Admin>();
    }
    return this._admins;
  }

  set admins(value: Array<Admin>) {
    this._admins = value;
  }
  // tslint:disable-next-line:typedef
  public edit(i: number, u: Admin) {
    this.admin = this.clone(u);
    this._index = i;
  }
  // tslint:disable-next-line:typedef
  private clone(admin: Admin) {
    const myClone = new Admin();
    myClone.id = admin.id;
    myClone.ref = admin.ref;
    myClone.nom = admin.nom;
    myClone.prenom = admin.prenom;
    myClone.mail = admin.mail;
    myClone.telephone = admin.telephone;
    return myClone;
  }
  // tslint:disable-next-line:typedef
  public deleteTemplate(admin: Admin) {
    const index = this.admins.findIndex(v => v.ref === admin.ref);
    if (index !== -1) {
      this.admins.splice(index, 1);
    }
  }
  // tslint:disable-next-line:typedef
  public deleteByReference(admin: Admin) {
    this.http.delete<number>('http://localhost:8037/Gestion-TacheProjet/Admin/ref/' + admin.ref).subscribe(
      data => {
        console.log('num of elem deleted' + data);
        this.deleteTemplate(admin);
      }
    );
  }
  // tslint:disable-next-line:typedef
  public listAllEmployes() {
    this.http.get<Array<Admin>>('http://localhost:8037/Gestion-TacheProjet/Admin/').subscribe(
      data => {
        this.admins = data;
        console.log(data);
      }, error => {
        console.log(error);
      }
    );
  }
  public save() {
    this.http.post('http://localhost:8037/Gestion-TacheProjet/Admin/', this.admin).subscribe(
      data => {
        if (data > 0) {
          this.admins.push(this.clone(this.admin));
          console.log(data);
          this.admin = null;

        } else {
          alert('the element youre about to insert already exist ');
        }
      },
      error => {
        console.log('errooooooor');
      }
    );

  }
  public  findAdminByUser(ref: string) {
    // tslint:disable-next-line:max-line-length
    this.http.get<Responsable>('http://localhost:8037/Gestion-TacheProjet/Responsable/user/ref/' + ref).subscribe(
      data => {
        this.admin = data;
        console.log(data);
      }, error => {
        console.log('erooooooooooooooor');
      }
    );
  }

}
