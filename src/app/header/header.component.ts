import { Component } from '@angular/core';
import {UserService} from "../user/user.service";

import { UserType} from "../user/testUser";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public userService: UserService) { }


  protected readonly UserType = UserType;
}
