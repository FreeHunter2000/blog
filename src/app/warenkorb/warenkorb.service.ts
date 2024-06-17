import { Injectable } from '@angular/core';
import {Produkt} from "../produkt/produkt.model";


@Injectable({
  providedIn: 'root'
})
export class warenKorbservice {

  warenkorbliste: Produkt[] =[];






  addtoWarenkorblist(newProdukt: Produkt) {

    this.warenkorbliste.push(newProdukt);
  }
  getWarenkorb():Produkt[]{
    return this.warenkorbliste;
  }



}
