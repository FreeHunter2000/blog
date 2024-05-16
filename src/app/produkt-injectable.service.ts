import { Injectable } from '@angular/core';
import {ProduktComponent} from "./produkt/produkt.component";

@Injectable({
  providedIn: 'root'
})
export class ProduktInjectableService {

  TestProdukt1 = new ProduktComponent
  Produkt: ProduktComponent[] = [{ProduktNr: 1, Name: 'TEstName', Anzahlproukte: 12},
    {ProduktNr: 2, Name: 'Laptop', Anzahlproukte: 2},
    {ProduktNr: 3, Name: 'Jacke', Anzahlproukte: 15}];

  getProdukt():ProduktComponent[]{
    return this.Produkt
  }

  constructor() { }
}
