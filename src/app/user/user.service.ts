import {Injectable} from '@angular/core';
import {User, UserType} from './testUser';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [];
  currentUser: User | undefined;

  constructor() {this.users.push({
    email: 'benutzer1@example.com',
    name: 'Benutzer Eins',
    vorname: 'Eins',
    eigeneBwertungen: [],
    eigeneKaeufe: [],
    userType: UserType.Admin,
    password: 'password1',
    loggedIn: true
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
}
