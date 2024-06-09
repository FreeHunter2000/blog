import { Component } from "@angular/core";
import { UserService } from "./user.service";
import { AuthService } from "./auth.service"; // Sie müssen AuthService importieren
import {User} from "./testUser";


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent { // Es ist üblich, Komponentenklassen mit Großbuchstaben zu beginnen
  email: string= ''; // Sie müssen email und password definieren
  password: string= '';

  constructor(protected userService: UserService, private authService: AuthService) { } // AuthService muss im Konstruktor injiziert werden

  UserList: User[] = this.userService.getAllUser();

  onLogin(): void {
    this.authService.login(this.email, this.password);
  }

  protected readonly AuthService = AuthService;
}
