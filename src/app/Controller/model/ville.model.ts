import {newArray} from '@angular/compiler/src/util';
import {Candidat} from './tacheEmploye.model';

export class Ville {
  public id: number;
  public reference: string;
  public nom: string;
  public codePostal: number;
  public candidats = new Array<Candidat>();
}
