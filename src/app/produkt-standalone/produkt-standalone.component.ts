import { Component, OnInit } from '@angular/core';
import { Produkt } from '../produkt/produkt.model';
import {ProduktInjectableService} from "../produkt-injectable.service";
import {ActivatedRoute} from "@angular/router";
import { Router } from '@angular/router';
import {userbewertung} from "../warenkorb/userBewertung.model";
import {warenKorbservice} from "../warenkorb/warenkorb.service";


@Component({
  selector: 'app-produkt-standalone',
  templateUrl: './produkt-standalone.component.html',
  styleUrls: ['./produkt-standalone.component.scss']
})
export class ProduktStandaloneComponent implements OnInit {
  produkte: Produkt[] = [];
  userBewertung : userbewertung[] =[]; //Produkt muss liste von Bewertungen bekommen
  produkt: Produkt | undefined = new Produkt(1,"empty","no",555,"No Path", 2.50, this.userBewertung);

  constructor(private produktservice :ProduktInjectableService, private route: ActivatedRoute, private router:Router, private warenkorb :warenKorbservice) { }

  ngOnInit(): void {
    // Beispiel-Daten initialisieren
    this.produkte = this.produktservice.getProdukt()
    let id: number;
    // @ts-ignore
    id = +this.route.snapshot.paramMap.get('id');
    this.produkt = this.produktservice.getItemById(id);
  }
  addToWarenkorb(){
    if(this.produkt != undefined ) {
      this.warenkorb.addtoWarenkorblist(this.produkt);
    }
  }

}
