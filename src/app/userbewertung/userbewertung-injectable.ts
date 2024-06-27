import {Injectable} from '@angular/core';
import {User,UserType} from "../user/testUser";
import {Produkt} from "../produkt/produkt.model";
import {userbewertung} from "../warenkorb/userBewertung.model";
import {UserService} from "../user/user.service";


@Injectable({
  providedIn: 'root'
})

export class UserbewertungService {

  userbewertungliste:userbewertung[]=[];

  constructor(userservice:UserService) {
   // @ts-ignore
    this.userbewertungliste= userservice.currentUser?.eigeneBwertungen
  }

  getUserbewertunglisteUser(){
    return this.userbewertungliste;
  }

}

