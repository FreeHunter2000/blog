import {Component, EventEmitter, Output} from "@angular/core";
import {UserService} from "../user.service";


import {User, UserModel} from "../../models/user.models";
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

  async registerUser() {
    const newUser = new UserModel({
      email: this.email,
      name: this.name,
      vorname: this.vorname,
      eigenekaeufe: [],
      eigenebewaertungen: [],
      isAdmin: false,
      password: this.password,
      loggedin: true,
      warenkorb: []
    });

    try {
      // Speichern Sie den Benutzer in der Datenbank
      const result = await newUser.save();
      console.log('User saved:', result);
    } catch (error) {
      console.error('Error saving user:', error);
    }


    this.name = "";
    this.vorname = "";
    this.email = "";
    this.password = "";
  }
    }






