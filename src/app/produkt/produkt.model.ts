export class Produkt{
  public produktId:number;
  public name : string;
  public description : string;
  public amount: number;
  public imagePath: string;

  constructor(produktId:number, name:string, description:string,amount:number, imagePath:string ) {
    this.produktId = produktId;
    this.name = name ;
    this.description = description;
    this.amount = amount;
    this.imagePath = imagePath;

  }
}
