import {Component, Input, OnChanges } from '@angular/core';
import {Produkt} from "../produkt/produkt.model";
import {WarenkorbComponent} from "../warenkorb/warenkorb.component";
import {UserService} from "../user/user.service";

@Component({
  selector: 'app-kauf-ansicht',
  templateUrl: './kauf-ansicht.component.html',
  styleUrl: './kauf-ansicht.component.scss'
})



export class KaufAnsichtComponent {

  userservice:UserService;

  constructor(private warenkorbComp: WarenkorbComponent , Userservice : UserService) {
    this.userservice =Userservice;

    this.berechnebetrag()


  }

  ngOnChanges() {
    this.berechnebetrag()
  }

  @Input() produktlist: Produkt[]=[];

  produktliste: Produkt[]=[];

  gesamtBetrag:number=0;


berechnebetrag(){
for(let Produkt of this.produktlist){
  this.gesamtBetrag+= Produkt.price;
}
}
  closeComponent() {
    this.warenkorbComp.showKaufAnsicht = false;

    this.userservice.setCurrentUserEinkaeufe(this.produktlist);

  }

}
