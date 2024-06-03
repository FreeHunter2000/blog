import { UserService} from './user.service';






export class User {
  email: string ;
  name: string;
  vorname: string;
  eigeneBwertungen: any[];
  eigeneKaeufe: any[];
  userType: 'Administrator' | 'Kunde';
  password: string;
  loggedIn: boolean | undefined ;

  constructor() {
    this.email= 'benutzer1@example.com';
    this.name= 'Benutzer Eins';
    this.vorname= 'Eins';
    this.eigeneBwertungen= [];
    this.eigeneKaeufe= [];
    this.userType= 'Kunde';
    this.password= 'password1';
    this.loggedIn= false ;
  }
}

// Erstellen Sie eine Instanz des UserService
const userService = new UserService();

// Erstellen Sie einige Benutzer
const user1: User = {
  email: 'benutzer1@example.com',
  name: 'Benutzer Eins',
  vorname: 'Eins',
  eigeneBwertungen: [],
  eigeneKaeufe: [],
  userType: 'Kunde',
  password: 'password1',
  loggedIn: false
};

const user2: User = {
  email: 'benutzer2@example.com',
  name: 'Benutzer Zwei',
  vorname: 'Zwei',
  eigeneBwertungen: [],
  eigeneKaeufe: [],
  userType: 'Administrator',
  password: 'password2',
  loggedIn: false
};



userService.addUser(user1);
userService.addUser(user2);



