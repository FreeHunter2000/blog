import { Injectable } from '@angular/core';
import {Produkt} from "../produkt/produkt.model";
import {UniqueProductsPipe} from "../unique-products.pipe";

type SimpleData = {
  numberValue: number;
  stringValue: string;
};


@Injectable({
  providedIn: 'root',

})
export class warenKorbservice {

  warenkorbliste: Produkt[] =[];

 clearedList: SimpleData[]=[];

constructor() {
}

  addtoWarenkorblist(newProdukt: Produkt) {
    this.warenkorbliste.push(newProdukt);
  }
  getWarenkorb():Produkt[]{
    return this.warenkorbliste;
  }

  clearWarenkorb(){
    this.warenkorbliste = [];
  }

  getClearedList(){

  }



}
