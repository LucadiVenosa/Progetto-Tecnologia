import { Component, OnInit, Input } from '@angular/core';
import { Annuncio } from '../annuncio';
import { Annunci } from '../mock-annunci';

@Component({
  selector: 'app-annunci',
  templateUrl: './annunci.component.html',
  styleUrls: ['./annunci.component.css']
})
export class AnnunciComponent implements OnInit {

  @Input() usernameUtenteOnline;
  annunci = Annunci;

  constructor() { }

  ngOnInit() {
  }

}
