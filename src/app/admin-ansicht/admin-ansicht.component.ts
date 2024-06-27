import {Component} from '@angular/core';
import {Produkt} from "../produkt/produkt.model";
import {User, UserType} from "../user/testUser";
import {ProduktInjectableService} from "../produkt-injectable.service";
import {UserService} from "../user/user.service";
import {userbewertung} from "../warenkorb/userBewertung.model";

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
  newUsertype:UserType = UserType.NoUser;

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

  onCheckboxcheck(usertype : UserType){
    if(this.newUsertype === usertype){
      this.newUsertype = UserType.NoUser;
    }
    else{
      this.newUsertype = usertype;
    }

  }

  createNewUser(){
   let newUser = new User(this.newEmail,this.newName,this.newVorname,this.newEigenebewertung,this.newEinkaeufe,this.newUsertype,this.newPassword,true)
   this.userservice.addUser(newUser) ;

    this.newName ="";
    this.newVorname="";
    this.newEmail="";
    this.newPassword="";
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


  protected readonly UserType = UserType;
}
