import { Component , OnChanges} from '@angular/core';
import {Produkt} from "../produkt/produkt.model";
import {User, UserType} from "../user/testUser";
import {userbewertung} from "./userBewertung.model";
import {warenKorbservice} from "./warenkorb.service";

@Component({
  selector: 'app-warenkorb',
  templateUrl: './warenkorb.component.html',
  styleUrl: './warenkorb.component.scss'
})
export class WarenkorbComponent {
  UserBewertung:userbewertung[] =[];
  Einkaeufe:Produkt[]=[];
  WarenkorbUser : User = new User("NoMail","NoName","NoName",this.UserBewertung,this.Einkaeufe, UserType.Kunde,"NoPassword",false);
  WarenkorbList: Produkt[]= this.warenkornservice.getWarenkorb();


 addWarenkorb(newProdukt:Produkt){
   this.WarenkorbList.push(newProdukt)
 }
 deleteWarenkorb(deleteProdukt:Produkt){
  let index = this.WarenkorbList.indexOf(deleteProdukt);
   this.WarenkorbList.splice(index);
 }

 constructor(private warenkornservice : warenKorbservice) {
 }





}
