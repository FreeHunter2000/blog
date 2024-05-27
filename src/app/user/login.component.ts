import {Component} from "@angular/core";
import {UserService} from "./user.service";
import {User} from "./testUser";

@Component({selector:'login',
            templateUrl:'./login.component.html',
            styleUrls : ['./login.component.scss']})

export class login{
  constructor(private userService: UserService) {
  }
  UserList: User [] = this.userService.getAllUser()
}
