import { Annuncio } from './annuncio';

export const Annunci: Annuncio[] = [
  { nome:'Cellulare',
    prezzo:200,
    descrizione:'Cellulare brutto',
    username:'mrossi',
    data:'06/06/2019',
    commenti:[
      {
        testo:'è brutto?',
        username:'ndavide',
      },
      {
        testo:'Sì',
        username:'mrossi',
      }]
  },
  { nome:'Skateboard',
    prezzo:20,
    descrizione:'Skateboard bianco e nero',
    username:'mrossi',
    data:'25/05/2019',
    commenti:[]
  }
];
