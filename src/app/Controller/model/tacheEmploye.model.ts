
import {Employe} from './employe.model';
import {Tache} from './tache.model';

export class TacheEmploye {
  public id: number;
  public ref: string;
  public employe = new Employe();
  public tache = new Tache();
}
