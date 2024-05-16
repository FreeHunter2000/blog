import { Component } from '@angular/core';

@Component({
  selector: 'app-produkt',
  templateUrl: './produkt.component.html',
  styleUrl: './produkt.component.scss'
})
export class ProduktComponent {
  public ProduktNr:number;
  public Name:string;
  public Anzahlproukte:number;

 constructor() {
   this.ProduktNr = 0;
   this.Name= "CreatedProdukt";
     this.Anzahlproukte= 22;
 }




}
