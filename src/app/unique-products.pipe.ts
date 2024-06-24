import { Pipe, PipeTransform } from '@angular/core';
import {Produkt} from "./produkt/produkt.model";
import {ProduktInjectableService} from "./produkt-injectable.service";
import {userbewertung} from "./warenkorb/userBewertung.model";

type SimpleData = {
  stringValue: string;
  numberValue: number;
};


@Pipe({
  name: 'uniqueProducts'
})






export class UniqueProductsPipe implements PipeTransform {

  dataArray: SimpleData[];
  emptyArray:any[];
  data!: SimpleData;
  constructor(private produktService: ProduktInjectableService) {
    this.dataArray = [];
    this.emptyArray=[];
  }

  transform(products:Produkt[]):SimpleData[] {
    if (!products || products.length === 0) {
      return [];
    }


    const ProduktMap = new Map<string, { count: number }>();

    for (const product of products) {
      if (ProduktMap.has(product.name)) {
        const currentProduct = ProduktMap.get(product.name);
        if (currentProduct) {
          currentProduct.count++;
        }
      } else {
        ProduktMap.set(product.name, {count: 1});
      }
    }

    this.emptyArray = Array.from(ProduktMap, ([key, value]) => ({stringValue: key, numberValue: value}));
    for (let product of this.emptyArray) {
      this.dataArray.push({stringValue: product.stringValue, numberValue: product.numberValue})
    }
 return this.dataArray;
  }

}
