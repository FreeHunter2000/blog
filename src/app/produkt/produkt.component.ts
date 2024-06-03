import {Component, Input} from '@angular/core';
import {Produkt} from "./produkt.model";


@Component({
  selector: 'app-produkt',
  templateUrl: './produkt.component.html',
  styleUrl: './produkt.component.scss'
})
export class ProduktComponent {
 @Input() produkt!: Produkt;
  Testprodukt : Produkt = new Produkt(5,"AnyName","TEst Description",68,"https://cdn.stocksnap.io/img-thumbs/960w/food-recipe_G8QICMKLUV.jpg")




}
