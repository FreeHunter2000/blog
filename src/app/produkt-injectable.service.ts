import { Injectable } from '@angular/core';
import {ProduktComponent} from "./produkt/produkt.component";
import {Produkt} from "./produkt/produkt.model";

@Injectable({
  providedIn: 'root'
})
export class ProduktInjectableService {


  Produktlist: Produkt[] = [ new Produkt(0, "TestName","This is just a Description",1,"https://cdn.stocksnap.io/img-thumbs/960w/food-recipe_G8QICMKLUV.jpg"),
    new Produkt(1, "Jacke","This is just a Description",15,"https://cdn.stocksnap.io/img-thumbs/960w/food-recipe_G8QICMKLUV.jpg"),
    new Produkt(2, "Hemd","This is just a Description",20,"https://cdn.stocksnap.io/img-thumbs/960w/food-recipe_G8QICMKLUV.jpg"),
    new Produkt(3, "Hose","This is just a Description",35,"https://cdn.stocksnap.io/img-thumbs/960w/food-recipe_G8QICMKLUV.jpg"),];




  getProdukt():Produkt[]{
    return this.Produktlist
  }

   addProdukt(newProdukt:Produkt){
     this.Produktlist.push(newProdukt);
  }

  constructor() { }
}
