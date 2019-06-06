import { Commento } from './commento';

export class Annuncio
{
  nome: string;
  prezzo: number;
  descrizione: string;
  username: string;
  data: string;
  commenti: Commento[];
}
