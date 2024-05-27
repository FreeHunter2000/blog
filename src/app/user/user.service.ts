import { Injectable } from '@angular/core';
import{ User } from "./testUser";


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
    userType: 'Kunde',
    password: 'password1'
  }) }

  addUser(user: User) {
    this.users.push(user);
  }

  removeUser(email: string) {
    this.users = this.users.filter(user => user.email !== email);
  }

  getUser(email: string) {
    return this.users.find(user => user.email === email);
  }

  getAllUser() {
    return this.users ;
  }
}
