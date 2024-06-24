import {Component, Input, NgModule, Output, ViewChild, AfterViewInit, ElementRef} from '@angular/core';
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
  @ViewChild('myDiv') myDiv!: ElementRef;
  @Input() einProdukt!:Produkt;


  gottenProdukt!:Produkt;
  constructor(private produktservice :ProduktInjectableService, private warenkorb :warenKorbservice ) {
  }

  ngAfterViewInit() {
    this.gottenProdukt = this.myDiv.nativeElement.getAttribute('mygottenprodukt');
    console.log(this.gottenProdukt); // Output: "someValue"
  }

  Produktlist:Produkt[]= this.produktservice.getProdukt();


  handleDataEvent(data: Produkt) {
  }


  addToWarenkorb(produkt:Produkt){

    this.warenkorb.addtoWarenkorblist(produkt);

  }

}
