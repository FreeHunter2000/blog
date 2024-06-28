import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import {User} from "../models/user.models";


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  loggedInUser: User | null | undefined = null;

  constructor(private userService: UserService) { }

  register(user: User) {
    this.userService.addUser(user);
  }


  logAndDisplay(message: string | null) {
    console.log(message);

    // Zeigen Sie die Nachricht in einem Popup an
    if (message) {
      alert(message);
    }
  }

  login(email: string, password: string) {
    const user = this.userService.getUser(email);
    if (user && user.password === password) {

      this.logAndDisplay('Erfolgreich eingeloggt!');
      this.userService.currentUser = user;
      this.userService.setUserLoggedIn(email)
      this.userService.currentUser = user;
      return true;
    } else {
      this.logAndDisplay('Fehler beim Einloggen. Bitte überprüfen Sie Ihre E-Mail und Ihr Passwort.');
      return false;
    }
  }

  logout() {

    console.log('Erfolgreich ausgeloggt!');
    this.userService.setUserLoggedOut(this.userService.currentUser?.email)
    return true;
  }
}
