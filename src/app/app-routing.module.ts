import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OverviewComponent} from "./overview/overview.component";
import {ArticleFormularComponent} from "./article-formular/article-formular.component";
import {ArtikelSeiteComponent} from "./artikel-seite/artikel-seite.component";

import {User} from "./user/testUser";

const routes: Routes = [
  //*{path:'', component:OverviewComponent},
  //+{path:'overview', component:OverviewComponent},
  //*{path:'formular', component:ArticleFormularComponent}
  { path: 'article', component: ArtikelSeiteComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'loginPage', component: User },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
