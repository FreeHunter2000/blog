import {Injectable} from '@angular/core';
import {User} from "../models/user.models";
import {Produkt} from "../produkt/produkt.model";
import {userbewertung} from "../warenkorb/userBewertung.model";
import {UserModel} from "../models/user.models";



@Injectable({
  providedIn: 'root'
})
export class UserService {
  userbewertung:userbewertung[]=[];
  einkaufe:Produkt[]=[];
  users: User[] = [];
  currentUser: User | undefined  = new UserModel();
  constructor() {this.users.push({
    email: 'benutzer1@example.com',
    name: 'Benutzer Eins',
    vorname: 'Eins',
    eigeneBwertungen: [],
    eigeneKaeufe: [],
    isAdmin: true,
    password: 'password1',
    loggedIn: true,
    warenkorb:[]
  }) }

  async addUser(user: User) {
    const newUser = new UserModel(user);
    return await newUser.save();
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




}
