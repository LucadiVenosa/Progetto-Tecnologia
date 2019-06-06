import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from './user';
import { Utenti } from './mock-user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  formRegistrazione: FormGroup;
  formLogin: FormGroup;
  nascondi: boolean;
  utenti = Utenti;
  usernameUtenteOnline: string;

  constructor(fb: FormBuilder) {
    this.formRegistrazione = fb.group({'nome': ['Nome', Validators.required], 'cognome': ['Cognome', Validators.required], 'username': ['username', Validators.required], 'password': ['12345678', Validators.required], 'email': ['email@gmail.com', Validators.compose([Validators.required, Validators.email])]});
    this.formLogin = fb.group({'username': ['username', Validators.required], 'password': ['12345678', Validators.required]});
  }

  nascondiMostra(){
    if(!this.nascondi){
      this.nascondi = true;
    } else {
      this.nascondi = false;
    }
  }

  registrazione(): boolean {
    if(this.formRegistrazione.valid){
      let utente : User = new User();
      utente.nome = this.formRegistrazione.controls['nome'].value;
      utente.cognome = this.formRegistrazione.controls['cognome'].value;
      utente.username = this.formRegistrazione.controls['username'].value;
      utente.password = this.formRegistrazione.controls['password'].value;
      utente.email = this.formRegistrazione.controls['email'].value;
      this.utenti.push(utente);
      console.log('Registrazione effettuata');
    } else {
      console.log("Il form non è valido");
    }
    return false;
  }

  login(): boolean {
    if(this.formLogin.valid){
      let userFound = false;
      for(let i of this.utenti){
        if(this.formLogin.controls['username'].value == i.username){
          if(this.formLogin.controls['password'].value == i.password){
            userFound = true;
            this.usernameUtenteOnline = i.username;
            console.log('Login effettuato');
            break;
          }
        }
      }
    } else {
      console.log("Il form non è valido");
    }
    return false;
  }

}
