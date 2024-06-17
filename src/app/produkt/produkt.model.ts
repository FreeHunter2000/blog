import {userbewertung} from "../warenkorb/userBewertung.model";

export class Produkt{
  public produktId:number;
  public name : string;
  public description : string;
  public amount: number;
  public imagePath: string;
  public price : number;
  public userBewertung: userbewertung[];


  constructor(produktId:number, name:string, description:string,amount:number, imagePath:string , price:number ,userBewertung:userbewertung[]) {
    this.produktId = produktId;
    this.name = name ;
    this.description = description;
    this.amount = amount;
    this.imagePath = imagePath;
    this.price = price;
    this.userBewertung=userBewertung;

  }
}
