import {Component, EventEmitter, Output} from "@angular/core";
import { UserService } from "./user.service";
import { AuthService } from "./auth.service"; // Sie müssen AuthService importieren
import {User} from "./testUser";


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent { // Es ist üblich, Komponentenklassen mit Großbuchstaben zu beginnen

  @Output() UserChange: EventEmitter<User> = new EventEmitter();

  email: string= ''; // Sie müssen email und password definieren
  password: string= '';



  constructor(protected userService: UserService, private authService: AuthService) { } // AuthService muss im Konstruktor injiziert werden

  UserList: User[] = this.userService.getAllUser();

  onLogin(): void {
   if( this.authService.login(this.email, this.password)){
     this.UserChange.emit(this.userService.getUser(this.email)) // sucht den User der die selbe mail hat wie der User bei dem die authentifikation funktioniert hat und übergibt ihn an overview
   }
  }

  protected readonly AuthService = AuthService;
}
