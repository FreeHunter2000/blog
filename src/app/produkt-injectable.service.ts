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
  Produktlist: Produkt[] = [ new Produkt(0, "Hühnchen","Ein gebratenes Hähnchen, goldbraun und knusprig, mit saftigem Fleisch und einer würzigen Kruste. Die Haut ist knusprig gebraten, das Fleisch zart und aromatisch. Serviert mit einer Auswahl an Beilagen wie Bratkartoffeln und Gemüse, perfekt für ein herzhaftes Mahl.",1,"https://cdn.stocksnap.io/img-thumbs/960w/food-recipe_G8QICMKLUV.jpg", 12 , this.eigeneBwertungen),
    new Produkt(1, "Lederjacke","Eine elegante braune Lederjacke, tailliert geschnitten mit asymmetrischem Reißverschluss und zwei geräumigen Taschen vorne. Perfekt für einen stilvollen Look bei kühlerem Wetter.",15,"https://img.freepik.com/fotos-kostenlos/portraet-des-stilvollen-huebschen-jungen-mannes_155003-10190.jpg?size=626&ext=jpg", 280, this.eigeneBwertungen),
    new Produkt(2, "Jeans","Dunkelblaue Jeans mit geradem Schnitt und klassischen fünf Taschen. Hergestellt aus strapazierfähigem Denim für Komfort und Langlebigkeit, ideal für den Alltag.",20,"https://cdn.stocksnap.io/img-thumbs/280h/jeans-sunglasses_NPUVYUOGB1.jpg",120, this.eigeneBwertungen),
    new Produkt(3, "Weißes Baumwollhemd","Ein klassisches weißes Baumwollhemd mit Button-Down-Kragen und verstellbaren Manschetten. Perfekt für formelle Anlässe oder lässige Looks, vielseitig kombinierbar.",35,"https://cdn.cafecoton.com/Delivery/Public/Image/-1x-1/pr-chemise-femme-romy-popeline-1-h21_1.jpeg",80, this.eigeneBwertungen),
    new Produkt(4, "Wildleder Stiefel","Braune Wildleder-Schnürschuhe, halbhoch mit rutschfester Gummisohle für Traktion und Komfort. Das weiche Innenfutter sorgt für angenehmen Tragekomfort, geeignet für verschiedene Anlässe.",40,"https://us.123rf.com/450wm/naito8/naito81709/naito8170901312/85680214-stiefel-lederschuhe-wartungsset.jpg?ver=6",320, this.eigeneBwertungen),];




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
