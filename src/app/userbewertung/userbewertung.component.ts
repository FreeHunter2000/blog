import {Component, Input} from '@angular/core';
import {userbewertung} from "../warenkorb/userBewertung.model";
import {UserService} from "../user/user.service";

@Component({
  selector: 'app-userbewertung',
  templateUrl: './userbewertung.component.html',
  styleUrl: './userbewertung.component.scss'
})
export class UserbewertungComponent {

  newUserbewertung:userbewertung = new userbewertung(0,"",0);

  UserbewertungsListe:userbewertung[]=[];

  userservice : UserService;
  @Input() produktname: string| undefined;
  constructor(userservice : UserService) {

    this.userservice = userservice;
  }


  onSubmit() {

    let newBewertung :userbewertung = new userbewertung( this.newUserbewertung.Bewertungsid,
      this.newUserbewertung.kommentar,
      this.newUserbewertung.bewertung)
    newBewertung.setproduktName(this.produktname)
    this.userservice.addCurrentuserComment(newBewertung);
    this.UserbewertungsListe.push(newBewertung);



      this.newUserbewertung.Bewertungsid =0;
      this.newUserbewertung.kommentar = '';
      this.newUserbewertung.bewertung = 0;
  }


}
