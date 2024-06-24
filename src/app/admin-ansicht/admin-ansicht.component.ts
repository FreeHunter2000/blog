import { Component } from '@angular/core';
import {Produkt} from "../produkt/produkt.model";
import {User} from "../user/testUser";
import {ProduktInjectableService} from "../produkt-injectable.service";
import {UserService} from "../user/user.service";

@Component({
  selector: 'app-admin-ansicht',
  templateUrl: './admin-ansicht.component.html',
  styleUrl: './admin-ansicht.component.scss'
})
export class AdminAnsichtComponent {

  showUserlist:boolean = false;
  showProduktlist:boolean = false;

  Produktlist:Produkt[]=[];
  Userlist:User[]=[];

  constructor(produktservice: ProduktInjectableService, userservice: UserService) {
  }

}
