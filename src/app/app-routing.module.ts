import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OverviewComponent} from "./overview/overview.component";
import {ArtikelSeiteComponent} from "./artikel-seite/artikel-seite.component";
import {AdminComponent} from "./user/admin/admin.component";
import {AdminGuard} from "./user/admin/admin.guard";

import {LoginComponent} from "./user/login.component";

const routes: Routes = [
  //*{path:'', component:OverviewComponent},
  //+{path:'overview', component:OverviewComponent},
  //*{path:'formular', component:ArticleFormularComponent}
  { path: 'article', component: ArtikelSeiteComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AdminGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
