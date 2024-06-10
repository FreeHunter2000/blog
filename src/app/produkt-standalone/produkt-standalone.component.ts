import { Component, OnInit } from '@angular/core';
import { Produkt } from '../produkt/produkt.model';


@Component({
  selector: 'app-produkt-standalone',
  templateUrl: './produkt-standalone.component.html',
  styleUrls: ['./produkt-standalone.component.scss']
})
export class ProduktStandaloneComponent implements OnInit {
  produkte: Produkt[] = [];

  constructor() { }

  ngOnInit(): void {
    // Beispiel-Daten initialisieren
    this.produkte = [
      {produktId: 1, name: 'Produkt 1', description: 'Beschreibung 1', amount: 10, imagePath: 'url1' },
      {produktId: 2, name: 'Produkt 2', description: 'Beschreibung 2', amount: 20, imagePath: 'url2' }
    ];
  }
}
