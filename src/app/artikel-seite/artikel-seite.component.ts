import { Component , NgModule} from '@angular/core';
import {ProduktComponent} from "../produkt/produkt.component";
import{ProduktInjectableService} from "../produkt-injectable.service";


@Component({
  selector: 'app-artikel-seite',
  templateUrl: './artikel-seite.component.html',
  styleUrl: './artikel-seite.component.scss'
})
export class ArtikelSeiteComponent {

  constructor(private produktservice :ProduktInjectableService) {
  }
  Produktlist:ProduktComponent[]= this.produktservice.getProdukt();




}
