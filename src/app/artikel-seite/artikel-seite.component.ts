import {Component, Input, NgModule, Output} from '@angular/core';
import {Produkt} from "../produkt/produkt.model";
import{ProduktInjectableService} from "../produkt-injectable.service";
import { Router } from '@angular/router';
import {warenKorbservice} from "../warenkorb/warenkorb.service";




@Component({
  selector: 'app-artikel-seite',
  templateUrl: './artikel-seite.component.html',
  styleUrl: './artikel-seite.component.scss'
})
export class ArtikelSeiteComponent {
  @Input() einProdukt!:Produkt;


  gottenProdukt!:Produkt;
  constructor(private produktservice :ProduktInjectableService,) {
  }
  Produktlist:Produkt[]= this.produktservice.getProdukt();


  handleDataEvent(data: Produkt) {
  }


}
