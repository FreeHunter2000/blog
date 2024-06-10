import { Component } from '@angular/core';
import {Produkt} from "../produkt/produkt.model";
import {User, UserType} from "../user/testUser";

@Component({
  selector: 'app-warenkorb',
  templateUrl: './warenkorb.component.html',
  styleUrl: './warenkorb.component.scss'
})
export class WarenkorbComponent {
  UserBewertung:any =[];
  Einkaeufe:any=[];
  WarenkorbUser : User = new User("NoMail","NoName","NoName",this.UserBewertung,this.Einkaeufe, UserType.Kunde,"NoPassword",false);
  WarenkorbList: Produkt[]= [];


 addWarenkorb(newProdukt:Produkt){
   this.WarenkorbList.push(newProdukt)
 }
 deleteWarenkorb(deleteProdukt:Produkt){
  let index = this.WarenkorbList.indexOf(deleteProdukt);
   this.WarenkorbList.splice(index);
 }




}
