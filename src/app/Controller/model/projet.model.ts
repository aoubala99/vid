import {Chef} from './chef.model';
import {Client} from './client.model';
import {EtatProjet} from './etat-projet.model';

export class Projet {
  public id: number;
  public ref: string;
  public description: string;
  public nom: string;
  public dateDebut: string;
  public dateFin: string;
  public budget: number;
  public chef = new Chef() ;
  public client= new Client();
  public etatProjet= new EtatProjet();
}
