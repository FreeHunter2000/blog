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




  login(email: string) {
    this.loggedInUser = this.userService.getUser(email);


      }





  logout() {
    this.loggedInUser = null;
  }
}
