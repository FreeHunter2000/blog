import {Component, EventEmitter, Input, Output,} from '@angular/core';
import { Router } from '@angular/router';
import {RouterModule} from "@angular/router";
import {Produkt} from "../produkt/produkt.model";
import{ProduktInjectableService} from "../produkt-injectable.service";
import {User} from "../models/user.models";
import {userbewertung} from "../warenkorb/userBewertung.model";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})



export class OverviewComponent {
  UserBewertung:userbewertung[] =[];
  Einkaeufe:any=[];


  constructor(private produktservice :ProduktInjectableService) {
  }
  Produktlist:Produkt[]= this.produktservice.getProdukt();








}
