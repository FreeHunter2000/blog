export class userbewertung{
  public Bewertungsid:number;
 public kommentar:string;
 public bewertung:number;
 public produktName:string|undefined;

  constructor(Bewertungsid:number, kommentar:string, bewertung:number) {
   this.Bewertungsid = Bewertungsid;
   this.kommentar = kommentar;
   this.bewertung = bewertung;
   this.produktName ="";

  }

  setproduktName(name: string | undefined){
    this.produktName =name;
  }
}
