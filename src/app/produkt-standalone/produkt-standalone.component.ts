import { Component, OnInit } from '@angular/core';
import { Produkt } from '../produkt/produkt.model';
import {ProduktInjectableService} from "../produkt-injectable.service";
import {ActivatedRoute} from "@angular/router";
import { Router } from '@angular/router';


@Component({
  selector: 'app-produkt-standalone',
  templateUrl: './produkt-standalone.component.html',
  styleUrls: ['./produkt-standalone.component.scss']
})
export class ProduktStandaloneComponent implements OnInit {
  produkte: Produkt[] = [];
  produkt: Produkt | undefined = new Produkt(1,"empty","no",555,"No Path");

  constructor(private produktservice :ProduktInjectableService, private route: ActivatedRoute, private router:Router ) { }

  ngOnInit(): void {
    // Beispiel-Daten initialisieren
    this.produkte = this.produktservice.getProdukt()
    let id: number;
    // @ts-ignore
    id = +this.route.snapshot.paramMap.get('id');
    this.produkt = this.produktservice.getItemById(id);
  }
}
