import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Produkt} from "./produkt.model";
import {ProduktInjectableService} from "../produkt-injectable.service";
import {Router} from "@angular/router";
import {userbewertung} from "../warenkorb/userBewertung.model";
import {warenKorbservice} from "../warenkorb/warenkorb.service";
import {article} from "../article/article.component";


@Component({
  selector: 'app-produkt',
  templateUrl: './produkt.component.html',
  styleUrl: './produkt.component.scss'
})
export class ProduktComponent {
 @Input() produkt!: Produkt;
@Output() onWarenkorbAdd = new EventEmitter<Produkt>()

  userBewertung : userbewertung[] =[];
  Testprodukt : Produkt = new Produkt(5,"AnyName","TEst Description",68,"https://cdn.stocksnap.io/img-thumbs/960w/food-recipe_G8QICMKLUV.jpg", 20, this.userBewertung)



  onWarenkorbAddButton(){
   this.onWarenkorbAdd.emit(this.produkt)
  }
 constructor( private warenkorb :warenKorbservice ) {
 }

 addToWarenkorb(){
   this.warenkorb.addtoWarenkorblist(this.produkt);

 }


}
