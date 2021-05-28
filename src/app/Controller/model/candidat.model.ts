import {Ville} from './ville.model';
import {newArray} from '@angular/compiler/src/util';

export class Candidat {
  public id: number;
  public cin: string;
  public nom: string;
  public prenom: string;
  public address: string;
  public numtelephone: string;
  public photos: string;
  public profession: string;
  public mail: string;
  public description: string;
  public bithday: Date;
}
