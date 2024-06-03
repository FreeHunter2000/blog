import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import {User} from "./testUser";

@Injectable({
  providedIn: 'root'
})




export class AuthService {
  loggedInUser: User | null | undefined = null;





  constructor(private userService: UserService) { }





  register(user: User) {
    this.userService.addUser(user);
  }





  login(email: string, password: string) {
    const user = this.userService.getUser(email);
    if (user && user.password === password) {
      console.log('Erfolgreich eingeloggt!');
      return true;
    } else {
      console.log('Fehler beim Einloggen. Bitte überprüfen Sie Ihre E-Mail und Ihr Passwort.');
      return false;
    }
  }

  logout() {
    console.log('Erfolgreich ausgeloggt!');
  }


}
