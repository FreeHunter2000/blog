import {Injectable} from '@angular/core';
import {User, UserType} from './testUser';
import {Produkt} from "../produkt/produkt.model";
import {userbewertung} from "../warenkorb/userBewertung.model";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  userbewertung:userbewertung[]=[];
  einkaufe:Produkt[]=[];
  users: User[] = [];
  currentUser: User | undefined = new User("NoMail","NoName","NoName",this.userbewertung,this.einkaufe, UserType.Kunde,"NoPassword",false);

  constructor() {this.users.push({
    email: 'benutzer1@example.com',
    name: 'Benutzer Eins',
    vorname: 'Eins',
    eigeneBwertungen: [],
    eigeneKaeufe: [],
    userType: UserType.Admin,
    password: 'password1',
    loggedIn: true,
    warenkorb:[]
  }) }

  addUser(user: User) {
    this.users.push(user);
  }

  removeUser(email: string) {
    this.users = this.users.filter(user => user.email !== email);
  }

  getUser(email: string | undefined) {
    return this.users.find(user => user.email === email);
  }
  getUserMail() {
    return this.currentUser;
  }

  getAllUser() {
    return this.users ;
  }
  setUserLoggedIn(email: string) {
    const user = this.getUser(email);
    if (user) {
      user.loggedIn = true;
      console.log(`Der Benutzer ${email} ist jetzt eingeloggt.`);
    } else {
      console.log(`Benutzer ${email} nicht gefunden.`);
    }
  }

  setUserLoggedOut(email: string | undefined) {
    const user = this.getUser(email);
    if (user) {
      user.loggedIn = false;
      console.log(`Der Benutzer ${email} ist jetzt abgemeldet.`);
    } else {
      console.log(`Benutzer ${email} nicht gefunden.`);
    }
  }

  setCurrentUser(newUser: User | undefined) {
    this.currentUser = newUser;
  }

  setCurrentUserEinkaeufe(newEinkaeufe : Produkt[]| undefined){
    if(newEinkaeufe != undefined){
    // @ts-ignore
      this.currentUser.eigeneKaeufe = newEinkaeufe;
    }
  }

  setCurrentUserWarenkorb(Warenkorb : Produkt[]){
    if(Warenkorb != undefined) {
      // @ts-ignore
      this.currentUser.warenkorb = Warenkorb;
    }

  }

  addCurrentuserComment(newuserbewertung:userbewertung){
    this.currentUser?.eigeneBwertungen.push(newuserbewertung)
  }


}
