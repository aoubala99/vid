
import {Responsable} from './responsable.model';
import {Projet} from './projet.model';
import {EtatTache} from './etat-tache.model';

export class Tache {
  public id: number;
  public ref: string;
  public description: string;
  public nom: string;
  public dateDebut: string;
  public dateFin: string;
  public responsable = new Responsable() ;
  public projet = new Projet();
  public etatTache = new EtatTache();
}
