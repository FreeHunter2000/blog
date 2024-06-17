import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OverviewComponent} from "./overview/overview.component";
import {ArtikelSeiteComponent} from "./artikel-seite/artikel-seite.component";
import {AdminComponent} from "./user/admin/admin.component";
import {AdminGuard} from "./user/admin/admin.guard";
import {LoginComponent} from "./user/login.component";
import {StandaloneComponentScopeReader} from "@angular/compiler-cli/src/ngtsc/scope/src/standalone";
import {ProduktStandaloneComponent} from "./produkt-standalone/produkt-standalone.component";
import{RegisterComponent} from "./user/register/register.component";
import {WarenkorbComponent} from "./warenkorb/warenkorb.component";

const routes: Routes = [
  //*{path:'', component:OverviewComponent},
  //+{path:'overview', component:OverviewComponent},
  //*{path:'formular', component:ArticleFormularComponent}
  { path: 'article', component: ArtikelSeiteComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path:'warenkorb',component: WarenkorbComponent},
  { path: 'admin', component: AdminComponent, canActivate: [AdminGuard] },
  { path: 'standalone/:id', component: ProduktStandaloneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
