import { Injectable } from '@angular/core';
import {ProduktComponent} from "./produkt/produkt.component";
import {Produkt} from "./produkt/produkt.model";
import {userbewertung} from "./warenkorb/userBewertung.model";

@Injectable({
  providedIn: 'root'
})
export class ProduktInjectableService {

  eigeneBwertungen:userbewertung[] =[]
  // hier erstmal nur leere Userbewertungen eingefügt damit es funktioniert
  Produktlist: Produkt[] = [ new Produkt(0, "TestName","This is just a Description",1,"https://cdn.stocksnap.io/img-thumbs/960w/food-recipe_G8QICMKLUV.jpg", 12 , this.eigeneBwertungen),
    new Produkt(1, "Jacke","This is just a Description",15,"https://cdn.stocksnap.io/img-thumbs/960w/food-recipe_G8QICMKLUV.jpg", 16, this.eigeneBwertungen),
    new Produkt(2, "Hemd","This is just a Description",20,"https://cdn.stocksnap.io/img-thumbs/960w/food-recipe_G8QICMKLUV.jpg",20, this.eigeneBwertungen),
    new Produkt(3, "Hose","This is just a Description",35,"https://cdn.stocksnap.io/img-thumbs/960w/food-recipe_G8QICMKLUV.jpg",24, this.eigeneBwertungen),
    new Produkt(4, "Schuhe","This is just a Description",40,"https://cdn.stocksnap.io/img-thumbs/960w/food-recipe_G8QICMKLUV.jpg",24, this.eigeneBwertungen),];




  getProdukt():Produkt[]{
    return this.Produktlist;
  }

   addProdukt(newProdukt:Produkt){
     this.Produktlist.push(newProdukt);
  }


  getItemById(id: number) {
    return this.Produktlist.find(item => item.produktId === id);
  }

 findItemByName(name:string):Produkt| undefined{
    return this.Produktlist.find(Produkt => Produkt.name === name);
  }

  constructor() { }
}
