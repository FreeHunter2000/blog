import {Component, EventEmitter, Output} from "@angular/core";
import {UserService} from "../user.service";


import {User, UserType} from "../testUser";
import {AuthService} from "../auth.service";

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  email: string= '';
  password: string= '';
  vorname: string= '';
  name: string= '';

  constructor(protected userService: UserService, private authService: AuthService) { }

  registerUser() {

      const user: User = {
        userType: UserType.Kunde,
        eigeneBwertungen: [],
        eigeneKaeufe: [],
        loggedIn: true,
        email: this.email,
        name: this.name,
        vorname: this.vorname,
        password: this.password,
      };
        this.userService.addUser(user)
      // Hier würden Sie den Benutzer in Ihrer Datenbank speichern
      console.log(user);
    };

  }




