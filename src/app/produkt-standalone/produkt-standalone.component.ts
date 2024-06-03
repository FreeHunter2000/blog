import { Component } from '@angular/core';
import {Produkt} from "../produkt/produkt.model";

@Component({
  selector: 'app-produkt-standalone',
  templateUrl: './produkt-standalone.component.html',
  styleUrl: './produkt-standalone.component.scss'
})
export class ProduktStandaloneComponent {
  Produkt:Produkt = new Produkt(69,"Test","TEstTEsteETSTE",0,"https://cdn.stocksnap.io/img-thumbs/960w/food-recipe_G8QICMKLUV.jpg");

}
