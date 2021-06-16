import { Injectable } from '@angular/core';
import {Client} from '../model/client.model';
import {newArray} from '@angular/compiler/src/util';
import {User} from '../model/user.model';
import {Employe} from '../model/employe.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor( private http: HttpClient) { }
  private _client: Client;
  private _clients: Array<Client>;
  private _index: number;
  get client(): Client {
    if (this._client == null){
      this._client = new Client();
    }
    return this._client;
  }

  set client(value: Client) {
    this._client = value;
  }

  get clients(): Array<Client> {
    if (this._clients == null){
      this._clients = new Array<Client>();
    }
    return this._clients;
  }

  set clients(value: Array<Client>) {
    this._clients = value;
  }
  public edit(i: number, u: Client) {
    this.client = this.clone(u);
    this._index = i;
  }
  // tslint:disable-next-line:typedef
  private clone(client: Client) {
    const myClone = new Client();
    myClone.id = client.id;
    myClone.cin = client.cin;
    myClone.nom = client.nom;
    myClone.address = client.address;
    myClone.mail = client.mail;
    myClone.telephone = client.telephone;
    return myClone;
  }
  // tslint:disable-next-line:typedef
  public deleteTemplate(client: Client) {
    const index = this.clients.findIndex(v => v.cin === client.cin);
    if (index !== -1) {
      this.clients.splice(index, 1);
    }
  }
  // tslint:disable-next-line:typedef
  public deleteByReference(client: Client) {
    this.http.delete<number>('http://localhost:8037/Gestion-TacheProjet/client/cin/' + client.cin).subscribe(
      data => {
        console.log('num of elem deleted' + data);
        this.deleteTemplate(client);
      }
    );
  }
  // tslint:disable-next-line:typedef
  public listAllEmployes() {
    this.http.get<Array<Client>>('http://localhost:8037/Gestion-TacheProjet/client/').subscribe(
      data => {
        this.clients = data;
        console.log(data);
      }, error => {
        console.log(error);
      }
    );
  }
  public save() {
    this.http.post('http://localhost:8037/Gestion-TacheProjet/client/', this.client).subscribe(
      data => {
        if (data > 0) {
          this.clients.push(this.clone(this.client));
          console.log(this.client);
          this.client = null;

        } else {
          alert('the element youre about to insert already exist ');
        }
      },
      error => {
        console.log('errooooooor');
      }
    );

  }
}
