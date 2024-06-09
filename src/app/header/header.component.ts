import { Component } from '@angular/core';
import {UserService} from "../user/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public userService: UserService) { }

  title = 'Meine Angular App';
  showSubpage1: boolean = false;
  showSubpage2: boolean = false;
  showSubpage3: boolean = false;

  toggleSubpage1() {
    this.showSubpage1 = !this.showSubpage1;
  }

  toggleSubpage2() {
    this.showSubpage2 = !this.showSubpage2;
  }
  toggleSubpage3() {
    this.showSubpage3 = !this.showSubpage3;
  }
}
