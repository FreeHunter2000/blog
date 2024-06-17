import {Component, EventEmitter, Input, Output,} from '@angular/core';
import { Router } from '@angular/router';
import {RouterModule} from "@angular/router";
import {Produkt} from "../produkt/produkt.model";
import{ProduktInjectableService} from "../produkt-injectable.service";
import {User, UserType} from "../user/testUser";
import {userbewertung} from "../warenkorb/userBewertung.model";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})



export class OverviewComponent {
  UserBewertung:userbewertung[] =[];
  Einkaeufe:any=[];

 user : User = new User("NoMail","NoName","NoName",this.UserBewertung,this.Einkaeufe, UserType.Kunde,"NoPassword",false);

  constructor(private produktservice :ProduktInjectableService) {
  }
  Produktlist:Produkt[]= this.produktservice.getProdukt();

  receiveData(data: User) {
    this.user = data;

    console.log(this.user.email +"Help")
  }






}
