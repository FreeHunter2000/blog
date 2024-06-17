import {userbewertung} from "../warenkorb/userBewertung.model";


export enum UserType {
  Admin = 'Admin',
  Kunde = 'Kunde'

}
export class User {
  email: string;
  name: string;
  vorname: string;
  eigeneBwertungen: userbewertung[];
  eigeneKaeufe: any[];
  userType: UserType;
  password: string;
  loggedIn: boolean;

  constructor(email: string, name: string, vorname: string,eigeneBwertungen:userbewertung[], eigeneKaeufe: any[], userType: UserType, password: string, loggedIn: boolean) {
    this.email = email;
    this.name = name;
    this.vorname = vorname;
    this.eigeneBwertungen = eigeneBwertungen;
    this.eigeneKaeufe = [];
    this.userType = UserType.Kunde;
    this.password = password;
    this.loggedIn = true;
  }
}

