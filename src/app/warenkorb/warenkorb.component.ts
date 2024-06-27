import {Component, OnChanges, SimpleChange, OnInit} from '@angular/core';
import {Produkt} from "../produkt/produkt.model";
import {User, UserType} from "../user/testUser";
import {userbewertung} from "./userBewertung.model";
import {warenKorbservice} from "./warenkorb.service";
import {UniqueProductsPipe} from "../unique-products.pipe";
import {ProduktInjectableService} from "../produkt-injectable.service";
import {UserService} from "../user/user.service";
import {UserbewertungService} from "../userbewertung/userbewertung-injectable";

@Component({
  selector: 'app-warenkorb',
  templateUrl: './warenkorb.component.html',
  styleUrl: './warenkorb.component.scss',
  providers: [UniqueProductsPipe]
})
export class WarenkorbComponent {
  UserBewertung:userbewertung[] =[];
  Einkaeufe:Produkt[]=[];
  WarenkorbUser : User = new User("NoMail","NoName","NoName",this.UserBewertung,this.Einkaeufe, UserType.Kunde,"NoPassword",false);
  WarenkorbList: Produkt[]= this.warenkornservice.getWarenkorb();

  uniqueProducts!: any[];


  showKaufAnsicht = false;

 addWarenkorb(newProdukt:Produkt){
   this.WarenkorbList.push(newProdukt)
 }
 deleteWarenkorb(deleteProdukt:Produkt){
  let index = this.WarenkorbList.indexOf(deleteProdukt);
   this.WarenkorbList.splice(index);
 }

 constructor(private warenkornservice : warenKorbservice, private uniqueProductsPipe: UniqueProductsPipe, private  produktlist: ProduktInjectableService , userservice: UserService, private userbewertungsservice :UserbewertungService) {
   this.uniqueProducts = this.uniqueProductsPipe.transform(this.warenkornservice.getWarenkorb());
   console.log(this.uniqueProducts)
   console.log("HElp");

 userservice.setCurrentUserWarenkorb(this.WarenkorbList)

   this.UserBewertung = userbewertungsservice.getUserbewertunglisteUser();


 }



 clearWarenkorbList(){
this.warenkornservice.clearWarenkorb()
   this.WarenkorbList = this.warenkornservice.getWarenkorb()
 }



 setListAgain(){
   this.uniqueProducts = this.uniqueProductsPipe.transform(this.WarenkorbList);
 }



  toggleKaufAnsicht() {
    this.showKaufAnsicht = !this.showKaufAnsicht;
  }

}
