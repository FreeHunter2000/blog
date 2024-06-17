export class userbewertung{
  public Bewertungsid:number;
 public kommentar:string;
 public bewertung:number;

  constructor(Bewertungsid:number, kommentar:string, bewertung:number) {
   this.Bewertungsid = Bewertungsid;
   this.kommentar = kommentar;
   this.bewertung = bewertung;

  }
}
