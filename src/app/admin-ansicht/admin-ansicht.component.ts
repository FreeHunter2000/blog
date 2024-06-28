import {Component} from '@angular/core';
import {Produkt} from "../produkt/produkt.model";

import {ProduktInjectableService} from "../produkt-injectable.service";
import {UserService} from "../user/user.service";
import {userbewertung} from "../warenkorb/userBewertung.model";
import {User, UserModel, UserSchema} from "../models/user.models";
import mongoose from "mongoose";




@Component({
  selector: 'app-admin-ansicht',
  templateUrl: './admin-ansicht.component.html',
  styleUrl: './admin-ansicht.component.scss'
})
export class AdminAnsichtComponent {



  showUserlist:boolean = false;
  showProduktlist:boolean = false;

  Produktlist:Produkt[]=[];
  Userlist:User[]=[];
  isAdmin: boolean=true;

  newName:string ="";
  newVorname:string="";
  newEmail:string="";
  newPassword:string="";

  newEigenebewertung: userbewertung[]=[];
  newEinkaeufe:Produkt[]=[];
  userservice: UserService;

  newPrName:string ="";
  newPrDescription:string ="";
  newPrAmount:number=0;
  newPrImagePath:string ="";
  newPrPrice:number=0;
  newPrUserbewertung:userbewertung[]=[];


  produktservice:ProduktInjectableService;







  constructor(produktservice: ProduktInjectableService, userservice: UserService) {
    this.Produktlist = produktservice.getProdukt();
    this.Userlist = userservice.getAllUser();

    this.userservice = userservice;
    this.produktservice = produktservice;
  }





  async createNewUser() {



      const newUser = new UserModel({
        username: 'testuser',
        email: 'test@example.com',
        password: 'password123'
      });

      try {
        const savedUser = await newUser.$__save();
        console.log('User saved:', savedUser);
      } catch (error) {
        console.error('Error saving user:', error);
      }



  }

  createProdukt(){
    if(this.newPrImagePath ===""){
      this.newPrImagePath ="https://cdn.stocksnap.io/img-thumbs/960w/food-recipe_G8QICMKLUV.jpg";
    }
    let newProdukt= new Produkt(this.Produktlist.length,this.newPrName,this.newPrDescription,this.newPrAmount,this.newPrImagePath,this.newPrPrice,this.newPrUserbewertung)
    this.produktservice.addProdukt(newProdukt);

    this.newPrName ="";
    this.newPrDescription ="";
    this.newPrAmount=0;
    this.newPrImagePath ="";
    this.newPrPrice=0;


  }



}
